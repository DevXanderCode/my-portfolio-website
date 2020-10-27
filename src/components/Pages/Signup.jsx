import * as React from 'react';
import * as YUP from 'yup';
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { connect } from 'react-redux';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffSharpIcon from '@material-ui/icons/VisibilityOffSharp';
import PersonIcon from '@material-ui/icons/Person';
import * as AuthActions from '../../store/actions/authActions';
import FormikField from '../common/FormikField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const loginPageStyle = {
	minWidth: '40%',
	marginTop: '2%',
	border: '1px groove rgba(122,122, 122, 0.4)',
	// backgroundImage: "linear-gradient(180deg, #555,rgba(118,118,118, .8))",
	boxShadow: '0px 0px 15px rgba(0,0,0,0.5)',
	borderRadius: '5px',
	backgroundColor: '#eee',
	padding: '2% 5% 0'
};

const formTitle = {
	textAlign: 'center',
	color: 'white',
	width: '100%',
	marginBottom: '1.4rem',
	fontSize: '2rem'
};

const initialsStyle = {
	backgroundColor: 'rgb(46,46,46)',
	display: 'inline-block',
	padding: '5px 20px 0',
	fontSize: '3rem',
	marginTop: '2%'
};

const LoginButton = {
	width: '100%',
	borderRadius: '100px',
	padding: '4%',
	backgroundImage: 'linear-gradient(60deg, rgb(40,208,245,.8),rgba(127,41,190, .8))',
	marginTop: '5%'
};

const iconContainer = {
	display: 'flex',
	borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
	margin: `calc(13px + .rem) 0`,
	alignItems: 'flex-end',
	paddingBottom: '3px',
	height: `58px`
};

const initialValues = {
	name: '',
	email: '',
	password: '',
	confirmPassword: ''
};

const loginSchema = YUP.object().shape({
	name: YUP.string().required('please input your name'),
	email: YUP.string().email('please enter a valid email').required('Please you need to signup with an email address'),
	password: YUP.string()
		.min(8, 'your password need to be at least 8 charaters long')
		.required('please enter your Password'),
	confirmPassword: YUP.string()
		.required('please you need to confirm your password')
		.oneOf([ YUP.ref('password'), null ], "Password dont't  match")
});

const Alert = (props) => {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2)
		}
	}
}));

const Signup = ({ handleChange, handleSubmit, handleBlur, touched, errors, values, register, auth }) => {
	const [ fieldType, setFieldType ] = React.useState('password');
	const classes = useStyles();
	// const [ open, setOpen ] = React.useState(false);

	// let open = false;

	// const handleClose = (event, reason) => {
	// 	if (reason === 'clickaway') {
	// 		return;
	// 	}

	// 	setOpen(false);
	// };
	return (
		<div className="login-page" style={{ ...loginPageStyle }}>
			<div className="container">
				<div className="login-form" style={{ padding: '0 1rem' }}>
					<div style={{ ...formTitle }}>
						<h1 style={{ color: 'black' }}>Welcome</h1>
						<h1 style={{ ...initialsStyle }}>A</h1>
					</div>

					<Formik initialValues={initialValues} validationSchema={loginSchema}>
						{({ isValid, dirty, values, isSubmitting, ...props }) => (
							<Form
								onSubmit={(e) => {
									e.preventDefault();
									register(values.name, values.email, values.password);
								}}
							>
								<div style={{ display: 'flex' }}>
									<div style={{ ...iconContainer }}>
										<PersonIcon />
									</div>
									<FormikField
										type={'text'}
										label={'Name'}
										name={'name'}
										fullwidth
										required
										style={{ display: 'flex', flexGrow: '100' }}
									/>
								</div>
								<div style={{ display: 'flex' }}>
									<div style={{ ...iconContainer }}>
										<MailOutlineIcon />
									</div>
									<FormikField
										type={'text'}
										label={'Email'}
										name={'email'}
										fullwidth
										required
										style={{ display: 'flex', flexGrow: '100' }}
									/>
								</div>
								<div style={{ display: 'flex' }}>
									<FormikField
										type={fieldType}
										label={'Password'}
										name={'password'}
										fullwidth
										required
										style={{ display: 'flex', flexGrow: '100' }}
									/>
									<div
										style={{ ...iconContainer }}
										onClick={(e) =>
											fieldType === `text` ? setFieldType(`password`) : setFieldType(`text`)}
									>
										{fieldType === 'password' ? (
											<VisibilityIcon style={{ cursor: 'pointer' }} />
										) : (
											<VisibilityOffSharpIcon style={{ cursor: 'pointer' }} />
										)}
									</div>
								</div>
								<div style={{ display: 'flex' }}>
									<FormikField
										type={fieldType}
										label={'Confirm Password'}
										name={'confirmPassword'}
										fullwidth
										required
										style={{ display: 'flex', flexGrow: '100' }}
									/>
									<div
										style={{ ...iconContainer }}
										onClick={(e) =>
											fieldType === `text` ? setFieldType(`password`) : setFieldType(`text`)}
									>
										{fieldType === 'password' ? (
											<VisibilityIcon style={{ cursor: 'pointer' }} />
										) : (
											<VisibilityOffSharpIcon style={{ cursor: 'pointer' }} />
										)}
									</div>
								</div>
								<button
									id="LoginButton"
									className="btn btn-success text-uppercase"
									type="submit"
									style={{
										...LoginButton
									}}
									disabled={!isValid}
								>
									Signup
								</button>
								<div style={{ marginTop: '10%', marginBottom: '0' }}>
									<pre>
										Already have an Account?
										<Link to={'/admin'} style={{ color: 'green' }}>
											Login
										</Link>
									</pre>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>

			{auth.error.response && (
				<div className={classes.root}>
					<Snackbar open={true} autoHideDuration={6000}>
						<Alert severity="error">{auth.error.response && auth.error.response.data.error.message}</Alert>
					</Snackbar>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		register: (name, email, password) => {
			dispatch(AuthActions.register(name, email, password));
			console.log('register the user:', name, email);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

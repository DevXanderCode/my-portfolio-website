import * as React from 'react';
import * as YUP from 'yup';
import { Form, Formik } from 'formik';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffSharpIcon from '@material-ui/icons/VisibilityOffSharp';
import * as AuthActions from '../../store/actions/authActions';
import FormikField from '../common/FormikField';
import { useSnackbar } from 'notistack';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const loginPageStyle = {
	minWidth: '40%',
	marginTop: '3%',
	border: '1px groove rgba(122,122, 122, 0.4)',
	// backgroundImage: "linear-gradient(180deg, #555,rgba(118,118,118, .8))",
	boxShadow: '0px 0px 15px rgba(0,0,0,0.5)',
	borderRadius: '5px',
	backgroundColor: '#eee',
	padding: '5% 5% 0'
};

const formTitle = {
	textAlign: 'center',
	color: 'white',
	width: '100%',
	marginBottom: '2.4rem',
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
	email: '',
	password: ''
};

const loginSchema = YUP.object().shape({
	email: YUP.string().email('please enter a valid email').required('Please you need to login with an email address'),
	password: YUP.string().required('please enter your Password')
});

const Login = ({ handleChange, handleSubmit, handleBlur, touched, errors, values, login, auth, notifications }) => {
	const [ fieldType, setFieldType ] = React.useState('password');
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	notifications.notifications &&
		notifications.notifications.length > 0 &&
		enqueueSnackbar(notifications.notifications[notifications.notifications.length - 1].notification.message, {
			variant: `${notifications.notifications[
				notifications.notifications.length - 1
			].notification.name.toLowerCase()}`,
			preventDuplicate: true
		});
	return (
		<div className="login-page" style={{ ...loginPageStyle }}>
			<div className="container">
				<div className="login-form" style={{ padding: '1rem' }}>
					<div style={{ ...formTitle }}>
						<h1 style={{ color: 'black' }}>Welcome</h1>
						<h1 style={{ ...initialsStyle }}>A</h1>
					</div>

					<Formik initialValues={initialValues} validationSchema={loginSchema}>
						{({ isValid, dirty, values, isSubmitting, ...props }) => (
							<Form
								onSubmit={(e) => {
									e.preventDefault();
									login(values.email, values.password);
								}}
							>
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
								<button
									id="LoginButton"
									className="btn btn-success text-uppercase"
									type="submit"
									style={{
										...LoginButton
									}}
									disabled={!isValid}
								>
									Login
								</button>
								<div style={{ marginTop: '30%' }}>
									<pre>
										Don't have an Account?
										<Link to="/signup" style={{ color: 'green' }}>
											Signup
										</Link>
									</pre>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		notifications: state.notifications
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: (email, password) => {
			dispatch(AuthActions.login(email, password));
			console.log('logging in user:', email);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

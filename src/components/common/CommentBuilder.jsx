import * as React from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import FormikField from '../common/FormikField';
import { Form, Formik } from 'formik';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffSharpIcon from '@material-ui/icons/VisibilityOffSharp';
import * as SiteActions from '../../store/actions/siteActions';

const initialValues = {
	email: '',
	password: ''
};

const loginSchema = Yup.object().shape({
	email: Yup.string().email('please enter a valid email').required('Please you need to login with an email address'),
	password: Yup.string().required('please enter your Password')
});

const CommentBuilder = () => {
	return (
		<div>
			<h4>hello comment builder section</h4>
		</div>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	site: state.site
});

const mapDispatchToProps = (dispatch) => ({
	postComment: (comment, token) => {
		dispatch(SiteActions.postComment(comment, token));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentBuilder);

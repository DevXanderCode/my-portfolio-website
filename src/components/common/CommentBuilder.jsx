import * as React from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import * as SiteActions from '../../store/actions/siteActions';
import Field from './Field';

const field = [
	{
		name: 'content',
		elementName: 'textarea',
		type: 'text',
		placeholder: 'Your comment *'
	}
];

const initialValues = {
	content: ''
};

const commentSchema = Yup.object().shape({
	content: Yup.string().required("Please your comment can't be empty")
});

const LoginButton = {
	width: '100%',
	borderRadius: '100px',
	padding: '2%',
	backgroundImage: 'linear-gradient(60deg, rgb(40,208,245,.8),rgba(127,41,190, .8))',
	marginTop: '5%'
};

const CommentBuilder = ({ postComment, getComments, auth, site, values, ...props }) => {
	return (
		<div className="col-md-6">
			{/* <h4>hello comment builder section</h4> */}
			<Formik initialValues={initialValues} validationSchema={commentSchema}>
				{({
					isValid,
					dirty,
					values,
					isSubmitting,
					handleBlur,
					errors,
					handleChange,
					touched,
					setFieldValue,
					...props
				}) => (
					<Form
						onSubmit={(e) => {
							e.preventDefault();
							const comment = {
								postId: site.post.id,
								profileId: auth.profile.id,
								userId: auth.user.id,
								content: values.content
							};
							postComment(comment, auth.token);
							// getComments(auth.token);
							// setFieldValue('content', '');
						}}
					>
						<h5>Add Comment</h5>
						<Field
							{...field[0]}
							onChange={handleChange}
							onBlur={handleBlur}
							touched={touched[field[0].name]}
							errors={errors[field[0].name]}
						/>
						<button
							id="LoginButton"
							className="btn btn-success text-uppercase"
							type="submit"
							style={{
								...LoginButton
							}}
							disabled={!isValid || !dirty || isSubmitting}
							// onClick={() => setFieldValue('content', '')}
						>
							Comment
						</button>
					</Form>
				)}
			</Formik>
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
	// getComments: (token) => {
	// 	dispatch(SiteActions.getComments(token));
	// }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentBuilder);

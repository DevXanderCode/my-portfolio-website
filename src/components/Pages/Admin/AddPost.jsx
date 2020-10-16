import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Paper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import { Form, withFormik } from 'formik';
import { FormikTextField } from 'formik-material-fields';
import * as YUP from 'yup';
import FormikSelect from '../../common/FormikSelect/index';
import * as AdminActions from '../../../store/actions/adminActons';
import  ImageIcon  from '@material-ui/icons/Image';

const styles = (theme) => ({
	container: {
		margin: theme.spacing(1)
	},
	save: {
		marginBottom: theme.spacing(2)
	},
	formControl: {
		// margin: theme.spacing(1),
		display: 'flex',
		flexDirection: 'row wrap',
		width: '100%'
	},
	leftSide: {
		margin: theme.spacing(1),
		padding: theme.spacing(3),
		flex: 2,
		height: '100%'
	},
	rightSide: {
		margin: theme.spacing(1),
		padding: theme.spacing(1),
		flex: 1,
		height: '100%'
	}
});

const statusItems = [ { label: 'Published', value: true }, { label: 'Unpulished', value: false } ];

const postSchema = YUP.object().shape({
	title: YUP.string().required('Post Title is Requiured'),
	slug: YUP.string().required(),
	content: YUP.string().required()
});

class AddPost extends React.Component {

	componentDidUpdate(props, state) {
		if (
			this.props.match.params.view === 'add' &&
			this.props.admin.posts.filter((p) => p.title === this.props.values.title).length > 0
		) {
			const post = this.props.admin.posts.filter((p) => p.title === this.props.values.title)[0];
			props.history.push(`/admin/posts/edit/${post.id}` + post.dispatch);
		} else if (this.props.isSubmitting) {
			props.history.push('/admin/posts');
		}

		if (this.props.admin.post.id !== props.admin.post.id) {
			// when redux state changes post in the admin reducer
			this.props.setValues(this.props.admin.post);
		}
	}

	componentDidMount(props, state) {
		if (this.props.match.params.view === 'edit' && this.props.match.params.id) {
			this.props.getSinglePost(this.props.match.params.id, this.props.auth.token);
		}
	}
	render() {
		const { classes, setFieldTouched, setFieldValue, isValid, dirty, isSubmitting, handleSubmit } = this.props;

		return (
			<div className={classes.container}>
				<h1>Add Posts</h1>
				<Form className={classes.formControl} onSubmit={handleSubmit}>
					<Paper className={classes.leftSide}>
						<FormikTextField
							name="title"
							label="Title"
							margin="normal"
							onChange={(e) => {
								return (
									setFieldValue('slug', e.target.value.toLowerCase().replace(/ /g, '_')),
									setFieldTouched('slug', true, false)
								);
							}}
							fullWidth
						/>
						<FormikTextField
							name="slug"
							// label='Slug'
							placeholder="Slug"
							margin="normal"
						/>
						<FormikTextField name="content" label="content" margin="normal" fullWidth />
					</Paper>
					<Paper className={classes.rightSide}>
						<FormikSelect label="Status" name="status" items={statusItems} required />
						<div className={classes.save}>
							<Button
								disabled={!isValid || !dirty || isSubmitting}
								color="secondary"
								variant="contained"
								type="submit"
							>
								<SaveIcon />
								{isSubmitting ? 'Saving' : 'Save'}
							</Button>
						</div>
						<div>
							<Button variant="contained" color="primary" onClick={e => {}}><ImageIcon /> Upload Post Image</Button>
						</div>
					</Paper>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth,
	admin: state.admin
});

const mapDispatchToProps = (dispatch) => ({
	addPost: (posts, token) => {
		dispatch(AdminActions.addPost(posts, token));
	},
	updatePost: (post, token) => {
		dispatch(AdminActions.updatePost(post, token));
	},
	getSinglePost: (id, token) => {
		dispatch(AdminActions.getSinglePost(id, token));
	}
});

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(
		withFormik({
			mapPropsToValues: ({ admin: { post }, ...props }) => ({
				title: post.title || '',
				slug: post.slug || '',
				createdAt: post.createdAt || '',
				status: post.status || false,
				content: post.content || ''
			}),
			validationSchema: postSchema,
			handleSubmit: (values, { setSubmitting, props: { addPost, updatePost, auth: { token }, ...props } }) => {
				console.log('saving', addPost);
				if (props.match.params.view === 'edit') {
					const post = {
						...values,
						id: props.match.params.id
					};
					updatePost(post, token);
				} else {
					addPost(values, token);
				}
			}
		})(withStyles(styles)(AddPost))
	)
);

import * as React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Style from 'style-it';
import { Link } from 'react-router-dom';
import API from '../../utils/api';
import Header from '../common/Header';
import * as SiteActions from '../../store/actions/siteActions';
import CommentBuilder from '../common/CommentBuilder';

const Single = ({ getSinglePost, site, auth: { token }, ...props }) => {
	try {
		React.useEffect(() => {
			// console.log('tyring to get the single post by slug');
			getSinglePost(props.match.params.slug, token);
		}, []);
	} catch (error) {
		console.log('got this error when i tried to get post by slug', error);
		throw error;
	}

	const { title, PostImage, content } = site;

	// console.log('logging site', site);

	return Style.it(
		`.post-content img{
        max-width: 100%;
    }`,
		<div>
			<Header
				subtitle={title}
				image={PostImage && PostImage.length > 0 && API.makeFileUrl(PostImage[0].url, null)}
				showButton={false}
			/>
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-9">
						<div className="post-content" dangerouslySetInnerHTML={{ __html: content }} />
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<h3>Comments</h3>
						<div className="container ">
							{site &&
								site.post.Comments &&
								site.post.Comments.length > 0 &&
								site.post.Comments.map((comment, idx) => (
									<div className="col-md-6 bg-white m-3" key={idx}>
										{console.log(
											'logging Date: ',
											moment(comment.Profile.created_at).format('MMMM Do YYYY, h:mm:ss a')
										)}
										<div className="row">
											<h4 className="col-md-6">{comment.Profile ? comment.Profile.name : ''}</h4>
											<p className="col-md-6">
												<b>
													{comment.Profile ? (
														moment(comment.Profile.created_at).format(
															'MMMM Do YYYY, h:mm:ss a'
														)
													) : (
														''
													)}
												</b>
											</p>
										</div>
										<p>{comment.content}</p>
									</div>
								))}
						</div>
						{token ? (
							<CommentBuilder />
						) : (
							<p>
								Need an account? <Link to="/signup">Signup</Link>
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	site: state.site
});

const mapDispatchToProps = (dispatch) => ({
	getSinglePost: (slug, token) => {
		dispatch(SiteActions.getPostBySlug(slug, token));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Single);

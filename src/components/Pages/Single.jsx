import * as React from 'react';
import { connect } from 'react-redux';
import Style from 'style-it';
import { Link } from 'react-router-dom';
import API from '../../utils/api';
import Header from '../common/Header';
import * as SiteActions from '../../store/actions/siteActions';
import CommentBuilder from '../common/CommentBuilder';

const Single = ({ getSinglePost, site, auth: { token }, ...props }) => {
	try {
		React.useEffect(() => {
			console.log('tyring to get the single post by slug');
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
				image={PostImage.length > 0 && API.makeFileUrl(PostImage[0].url, null)}
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

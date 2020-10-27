import * as React from 'react';
import { connect } from 'react-redux';
import API from '../../utils/api';
import Header from '../common/Header';
import * as SiteActions from '../../store/actions/siteActions';

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

	const { title, PostImage, content } = site[0];

	return (
		<div>
			<Header
				subtitle={title}
				image={PostImage.length > 0 && API.makeFileUrl(PostImage[0].url, null)}
				showButton={false}
			/>
			<div className="container">
				<div className="row">
					<div className="col-md-9">
						<div dangerouselySetInnerHTML={{ __html: content }} />
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

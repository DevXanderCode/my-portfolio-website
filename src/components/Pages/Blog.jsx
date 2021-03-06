import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import API from '../../utils/api';
import * as SiteActions from '../../store/actions/siteActions';
import Header from '../common/Header';
import SinglePortfolio from '../common/SinglePortfolio';
import image from '../assets/images/building.jpg';

const Blog = ({ getPosts, getPostCount, site: { posts, postCount }, ...props }) => {
	try {
		React.useEffect(() => {
			getPosts(0);
			getPostCount();
			console.log('trying to get posts');
		}, []);
	} catch (error) {
		console.log('got this error when i tried to get posts', error);
		throw error;
	}

	return (
		<div>
			<Header title="Blog" subtitle="Read all our story!" image={image} showButton={false} />
			<section className="bg-light page-section" id="portfolio">
				<div className="container">
					<div className="row">
						{posts && posts.length > 0 ? (
							posts.map(({ title, slug, id, content, PostImage }, idx) => {
								const imageThumbnail =
									PostImage && PostImage.length > 0
										? API.makeFileUrl(PostImage[0].thumbnail, null)
										: null;
								return (
									<SinglePortfolio
										key={id}
										title={title}
										subtitle={slug}
										image={imageThumbnail}
										postImage={PostImage}
										modalLink={`/blog/${slug}`}
									/>
								);
							})
						) : null}
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="text-center">
								{posts &&
								postCount > posts.length && (
									<button className="btn btn-success" onClick={(e) => getPosts(posts.length)}>
										Load More
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

const mapStateToProps = (state) => ({
	site: state.site
});
const mapDispatchToProps = (dispatch) => ({
	getPosts: (skip) => {
		dispatch(SiteActions.getPosts(skip));
	},
	getPostCount: () => {
		dispatch(SiteActions.getPostCount());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Blog));

import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import API from "../../utils/api";
import * as SiteActions from '../../store/actions/siteActions';
import Header from '../common/Header';
import SinglePortfolio from '../common/SinglePortfolio';
import image from '../assets/images/building.jpg';

const Blog = ({ getPosts, site: { posts }, ...props }) => {
	React.useEffect(() => {
		getPosts(0);
	}, []);
	return (
		<div>
			<Header title="Blog" subtitle="Read all our story!" image={image} showButton={false} />
			<section className="bg-light page-section" id="portfolio">
				<div className="container">
					{/* <div className="row">
						<div className="col-lg-12 text-center">
							<h2 className="section-heading text-uppercase">Portfolio</h2>
							<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
						</div>
					</div> */}
					<div className="row">
                        {
                            console.log("logging posts: ", posts)
                        }
						{posts && posts.length > 0 ? (
							posts.map(({ title, slug, id, content, PostImage }, idx) => {
                                const imageThumbnail = PostImage && PostImage.length > 0 ? API.makeFileUrl(PostImage[0].thubnail, null): null;
								return (<SinglePortfolio key={id} title={title} subtitle={slug} image={imageThumbnail} />)
                            })
						) : null}
					</div>
				</div>
			</section>
			<h4>Hi from the Blog component</h4>
		</div>
	);
};

const mapStateToProps = (state) => ({
	site: state.site
});
const mapDispatchToProps = (dispatch) => ({
	getPosts: (skip) => {
		dispatch(SiteActions.getPosts(skip));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Blog));

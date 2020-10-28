import * as React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Style from 'style-it';
import { Link } from 'react-router-dom';
import API from '../../utils/api';
import Header from '../common/Header';
import * as SiteActions from '../../store/actions/siteActions';
import CommentBuilder from '../common/CommentBuilder';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

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

	const dateFunc = (date) => {
		let diff = moment().diff(moment().format(`${date}`), 's');

		if (diff === 0 || diff < 60) {
			return 'just now';
		} else if (diff === 60) {
			return '1 min';
		} else if (diff > 60 && diff < 3600) {
			return `${Math.floor(diff / 60)} min`;
		} else if (diff > 3600 && diff < 86400) {
			return `${Math.floor(diff / 3600)} hours`;
		} else if ((diff >= 86400 && diff < 604, 800)) {
			return `${Math.floor(diff / 86400)} days`;
		}
	};

	const colors = { first: '#27d683', second: '#ff6666', third: '#da4453', fourth: '#2541b2', fifth: '#ed5665' };

	const initialfunc = (initial) => {
		const charCode = initial.charCodeAt(0);
		if (charCode <= 69) {
			return (
				<div
					className="col-md-1 nameInitial text-center ml-2 px-1 py-1"
					style={{ backgroundColor: `${colors.first}` }}
				>
					{initial}
				</div>
			);
		} else if (charCode <= 74) {
			return (
				<div
					className="col-md-1 nameInitial text-center ml-2 px-1 py-1"
					style={{ backgroundColor: `${colors.second}` }}
				>
					{initial}
				</div>
			);
		} else if (charCode <= 79) {
			return (
				<div
					className="col-md-1 nameInitial text-center ml-2 px-1 py-1"
					style={{ backgroundColor: `${colors.third}` }}
				>
					{initial}
				</div>
			);
		} else if (charCode <= 84) {
			return (
				<div
					className="col-md-1 nameInitial text-center ml-2 px-1 py-1"
					style={{ backgroundColor: `${colors.fourth}` }}
				>
					{initial}
				</div>
			);
		} else if (charCode <= 90) {
			return (
				<div
					className="col-md-1 nameInitial text-center ml-2 px-1 py-1"
					style={{ backgroundColor: `${colors.fifth}` }}
				>
					{initial}
				</div>
			);
		}
	};

	const { title, PostImage, content } = site;

	// console.log('logging site', site);

	return Style.it(
		`.post-content img{
		max-width: 100%;
		}
		.comment{
			box-shadow: 0px 5px 10px rgba(112,112,112,.5);
			background-color: beige;
		}
		.timeStamp{
			display: flex;
			justify-content: flex-end;
			margin: auto;
			text-align: center;
		}
		.nameInitial{
			border-radius: 50%;
			// background-color: #2541b2;	
			font-size: 1.3rem;
			color: white
		}
		`,
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
						<div className="container">
							{site &&
								site.post.Comments &&
								site.post.Comments.length > 0 &&
								site.post.Comments.map((comment, idx) => (
									<div className="col-md-6 m-3 p-2 comment" key={idx}>
										<div className="row">
											{comment.Profile ? initialfunc(comment.Profile.name[0].toUpperCase()) : ''}
											{/* <div className="col-md-1 nameInitial text-center ml-2 px-1 py-1">
												{comment.Profile ? comment.Profile.name[0].toUpperCase() : ''}
											</div> */}

											<h4 className="col-md-6" style={{ margin: 'auto 0' }}>
												{comment.Profile ? comment.Profile.name : ''}
											</h4>
											<div className="col-md-4 timeStamp">
												<AccessTimeIcon className="mr-1" />
												<p>{comment.Profile ? dateFunc(comment.Profile.created_at) : ''}</p>
											</div>
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

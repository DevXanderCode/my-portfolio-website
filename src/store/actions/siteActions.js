import API from '../../utils/api';

export const getPosts = (skip) => {
	return (dispatch) => {
		API.getSitePosts(skip, (res) => {
			dispatch({
				type: 'GOT_SITE_POSTS',
				payload: res.data,
				skip
			});
		});
	};
};

export const getPostCount = () => {
	return (dispatch) => {
		API.getPostCount((res) => {
			dispatch({
				type: 'GOT_POST_COUNT',
				payload: res.data.count
			});
		});
	};
};

export const setPostData = (post) => {
	return (dispatch) => {
		dispatch({
			type: 'SET_DEFAULT_POST_DATA',
			payload: post
		});
	};
};

export const getPostBySlug = (slug, token) => {
	return (dispatch) => {
		API.getPostBySlug(slug, token, (res) => {
			console.log('logging res: ', res);
			API.getComments(res.data.id, token, (res2) => {
				dispatch({
					type: 'SET_FULL_POST_DATA',
					payload: [ res.data, res2.data ]
				});
			});
		});
	};
};

export const getComments = (postId, token) => {
	return (dispatch) => {
		API.getComments(postId, token, (res) => {
			dispatch({
				type: 'GOT_COMMENTS',
				payload: res.data
			});
		});
	};
};

export const postComment = (comment, token) => {
	return (dispatch) => {
		API.postComment(comment, token, (res) => {
			console.log('logging post commit res: ', res);
			res.status === 200 &&
				API.getComments(res.data.postId, token, (res2) => {
					dispatch({
						type: 'ADDED_COMMENT',
						payload: res2.data
					});
				});
		});
	};
};

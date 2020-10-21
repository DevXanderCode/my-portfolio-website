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

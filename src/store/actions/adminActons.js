import API from '../../utils/api';

export const getUsers = (token) => {
	return (dispatch) => {
		API.getUsers(token, (res) => {
			dispatch({
				type: 'GOT_USERS',
				payload: res.data
			});
		});
	};
};

export const getPosts = (token) => {
	return (dispatch) => {
		API.getPosts(token, (res) => {
			console.log('logging the get posts res.data: ', res.data);
			dispatch({
				type: 'GOT_POSTS',
				payload: res.data
			});
		});
	};
};

export const addPost = (post, token) => {
	return (dispatch) => {
		API.addPost(post, token, (res) => {
			console.log('loggging the add Post res.data: ', res.data);
			dispatch({
				type: 'POST_ADDED',
				payload: res.data
			});
		});
	};
};

export const getSinglePost = (id, token) => {
	return (dispatch) => {
		API.getSinglePost(id, token, (res) => {
			dispatch({
				type: 'GOT_SINGLE_POST',
				payload: res.data
			});
		});
	};
};

export const updatePost = (post, token) => {
	return (dispatch) => {
		API.updatePost(post, token, (res) => {
			dispatch({
				type: 'UPDATED_POST',
				payload: res.data
			});
		});
	};
};

export const uploadImage = (data, token, postId, userId) => {
	return (dispatch) => {
		API.uploadImage(data, token, postId, userId, (res) => {
			console.log('logging upload image res.data: ', data, postId, userId, res.data);
			dispatch({
				type: 'UPLOADED_IMAGE',
				payload: res.data
			});
		});
	};
};

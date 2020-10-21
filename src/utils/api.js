import axios from 'axios';

const host = 'http://localhost:4000';
const API = {
	makeFileUrl: (url, token) => {
		return host + url + '?access_token=' + token;
	},
	login: (email, password, success) => {
		axios.post(`${host}/api/users/login`, { email, password }).then((res) => {
			success(res);
		});
	},
	getUsers: (token, success) => {
		axios.get(`${host}/api/users?access_token=${token}`).then((res) => {
			success(res);
		});
	},
	getPosts: (token, success) => {
		axios.get(`${host}/api/Posts?access_token=${token}`).then((res) => {
			success(res);
		});
	},
	addPost: (post, token, success) => {
		axios.post(`${host}/api/Posts?access_token=${token}`, post).then((res) => {
			success(res);
		});
	},
	getPostCount: (success) => {
		axios.get(`${host}/api/Post/count`).then((res) => {
			success(res);
		});
	},
	getSitePosts: (skip, success) => {
		axios
			.get(`${host}/api/Posts`, {
				params: {
					filter: {
						skip,
						limit: 6,
						include: 'PostImage'
					}
				}
			})
			.then((res) => {
				success(res);
			});
	},
	updatePost: (post, token, success) => {
		axios.patch(`${host}/api/Posts/${post.id}?access_token=${token}`, post).then((res) => {
			success(res);
		});
	},
	getSinglePost: (id, token, success) => {
		axios
			.get(`${host}/api/Posts/${id}?access_token=${token}`, {
				params: {
					filter: {
						include: 'PostImage'
					}
				}
			})
			.then((res) => {
				success(res);
			});
	},
	uploadImage: (data, token, postId, userId, success) => {
		axios
			.post(`${host}/api/PostImages/upload?post_id=${postId}&access_token=${token}&user_id=${userId}`, data)
			.then((res) => {
				success(res);
			});
	}
};

export default API;

import axios from 'axios';

const host =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:4000'
		: 'https://my-portfolio-website-backend.herokuapp.com';
const API = {
	makeFileUrl: (url, token) => {
		return host + url + '?access_token=' + token;
	},
	login: (email, password, success) => {
		axios
			.post(`${host}/api/users/login`, {
				email,
				password
			})
			.then((res) => {
				success(res);
			});
	},
	getUser: (userId, token, success) => {
		axios
			.get(`${host}/api/users/${userId}?access_token=${token}`, {
				params: {
					filter: {
						include: 'Profile'
					}
				}
			})
			.then((res) => {
				success(res);
			});
	},
	register: (name, email, password, success) => {
		axios
			.post(`${host}/api/users/`, {
				name,
				email,
				password
			})
			.then((res) => {
				success(res);
			})
			.catch((err) => {
				// console.log('logging error: ', err, err.name);
				success(err);
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
		axios.get(`${host}/api/Posts/count`).then((res) => {
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
						include: 'PostImage',
						fields: {
							id: true,
							slug: true,
							title: true,
							content: false
						}
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
	},
	getPostBySlug: (slug, token, success) => {
		axios
			.get(`${host}/api/Posts/findOne?access_token=${token}`, {
				params: {
					filter: {
						where: {
							slug
						},
						include: [
							'PostImage',
							{
								Comments: 'Profile'
							}
						]
					}
				}
			})
			.then((res) => {
				// console.log('logging response: ', res);
				success(res);
			});
	},
	getCommentById: (commentId, token, success) => {
		axios
			.get(`${host}/api/Comments/${commentId}?access_token=${token}`, {
				params: {
					filter: {
						include: 'Profile'
					}
				}
			})
			.then((res) => {
				success(res);
			});
	},
	getComments: (postId, token, success) => {
		axios
			.get(`${host}/api/Comments?access_token=${token}`, {
				params: {
					filter: {
						include: 'Profile',
						where: {
							postId
						}
					}
				}
			})
			.then((res) => {
				success(res);
			});
	},
	postComment: (comment, token, success) => {
		axios
			.post(`${host}/api/comments?access_token=${token}`, comment, {
				params: {
					filter: {
						include: 'Profile'
					}
				}
			})
			.then((res) => {
				success(res);
			});
	},
	logout: (token, success) => {
		axios
			.post(`${host}/api/users/logout?access_token=${token}`)
			.then((res) => {
				success(res);
			})
			.catch((err) => {
				console.log('got this error when i tried to logout', err);
			});
	}
};

export default API;

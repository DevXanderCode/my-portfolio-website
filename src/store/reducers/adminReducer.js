const defaultState = {
	users: [],
	posts: [],
	post: {}
};

const admin = (state = defaultState, action) => {
	switch (action.type) {
		case 'GOT_USERS':
			return {
				...state,
				users: action.payload
			};
		case 'GOT_POSTS':
			return {
				...state,
				posts: action.payload
			};
		case 'POST_ADDED':
			return {
				...state,
				posts: state.posts.concat(action.payload)
			};
		case 'GOT_SINGLE_POST':
			return {
				...state,
				post: action.payload
			};
		default:
			return state;
	}
};

export default admin;

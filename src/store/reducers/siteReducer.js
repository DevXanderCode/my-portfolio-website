const defaultState = {
	posts: [],
	postCount: 0,
	post: {},
	Comments: []
};

const site = (state = defaultState, action) => {
	switch (action.type) {
		case 'GOT_SITE_POSTS':
			return {
				...state,
				posts: action.skip ? state.posts.concat(action.payload) : action.payload
			};
		case 'GOT_POST_COUNT':
			return {
				...state,
				postCount: action.payload
			};
		case 'SET_DEFAULT_POST_DATA':
			return {
				...state,
				post: {
					...state.post,
					...action.payload
				}
			};
		case 'SET_FULL_POST_DATA':
			// console.log('logging action: ', action);
			return {
				...state,
				post: {
					...state.post,
					...action.payload
				}
			};
		case 'ADDED_COMMENT':
			return {
				...state,
				post: {
					...state.post,
					Comments: state.Comments.concat(action.payload)
				}
			};
		case 'GOT_COMMENTS':
			// console.log('logging action: ', action.payload);
			return {
				...state,
				post: {
					...state.post,
					Comments: action.payload
				}
			};
		default:
			return state;
	}
};

export default site;

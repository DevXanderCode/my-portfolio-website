const defaultState = {
	user: {},
	token: null,
	error: null
};

const auth = (state = defaultState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				user: action.payload,
				token: action.payload.token
			};
		case 'SHOW_ERROR':
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};

export default auth;

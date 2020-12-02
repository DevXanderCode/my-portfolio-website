const defaultState = {
	user: {},
	token: null,
	error: null,
	profile: null,
	notifications: []
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
		case 'AFTER_LOGIN':
			return {
				...state,
				user: action.payload,
				profile: action.payload.Profile
			};
		case 'LOGOUT': {
			return {
				...state,
				...defaultState
			};
		}
		case 'ENQUEUE_SNACKBAR':
			return {
				...state,
				notifications: [
					...state.notifications,
					{
						key: action.key,
						...action.notification
					}
				]
			};
		case 'CLOSE_SNACKBAR':
			return {
				...state,
				notifications: state.notifications.map(
					(notification) =>
						action.dismissAll || notification.key === action.key
							? { ...notification, dismissAll: true }
							: { ...notification }
				)
			};
		case 'REMOVE_SNACKBAR':
			return {
				...state,
				notifications: state.notifications.filter((notification) => notification.key !== action.key)
			};
		default:
			return state;
	}
};

export default auth;

const defaultState = {
	notifications: []
};

const notifications = (state = defaultState, action) => {
	switch (action.type) {
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
export default notifications;

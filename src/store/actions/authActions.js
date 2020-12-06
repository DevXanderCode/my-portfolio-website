import API from '../../utils/api';

export const login = (email, password) => {
	return (dispatch) => {
		API.login(email, password, (res) => {
			console.log('Results: ', res);
			if (res.status === 200) {
				dispatch({
					type: 'LOGIN',
					payload: { email, token: res.data.id, userId: res.data.userId }
				});
				API.getUser(res.data.userId, res.data.id, (res2) => {
					dispatch({
						type: 'AFTER_LOGIN',
						payload: res2.data
					});
				});
			} else {
				dispatch(enqueueSnackbar({ message: res.message, name: res.name }));
			}
		});
	};
};

export const enqueueSnackbar = (notification) => {
	const key = notification.options && notification.options.key;

	return {
		type: 'ENQUEUE_SNACKBAR',
		notification: {
			notification,
			key: key || new Date().getTime() * Math.random()
		}
	};
};

export const closeSnackbar = (key) => ({
	type: 'CLOSE_SNACKBAR',
	dismissAll: !key, // dismiss all if no key has been defined
	key
});

export const removeSnackbar = (key) => ({
	type: 'REMOVE_SNACKBAR',
	key
});

export const register = (name, email, password) => {
	return (dispatch) => {
		API.register(name, email, password, (res) => {
			console.log('logging res name', res.name);
			res.status === 200
				? dispatch(login(email, password))
				: res && dispatch(enqueueSnackbar({ message: res.message, name: res.name }));
		});
	};
};

export const logout = () => {
	return (dispatch) => {
		API.logout(dispatch({ type: 'LOGOUT', payload: null }));
	};
};

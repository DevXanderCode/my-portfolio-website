import API from '../../utils/api';

export const login = (email, password) => {
	return (dispatch) => {
		API.login(email, password, (res) => {
			console.log('Results: ', res.data);
			dispatch({
				type: 'LOGIN',
				payload: { email, token: res.data.id, userId: res.data.userId }
			});
		});
	};
};

export const register = (name, email, password) => {
	return (dispatch) => {
		API.register(name, email, password, (res) => {
			console.log('logging res', res);
			res.status === 200
				? dispatch(login(email, password))
				: res && dispatch({ type: 'SHOW_ERROR', payload: res });
		});
	};
};

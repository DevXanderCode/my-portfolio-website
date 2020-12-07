import { combineReducers } from 'redux';
import auth from './authReducer';
import admin from './adminReducer';
import site from './siteReducer';
import notifications from './notifcationReducer';

export default combineReducers({
	auth,
	admin,
	site,
	notifications
});

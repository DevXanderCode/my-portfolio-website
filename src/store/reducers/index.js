import { combineReducers } from "redux";
import auth from "./authReducer";
import admin from "./adminReducer";

export default combineReducers({
  auth,
  admin,
});

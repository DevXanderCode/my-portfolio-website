import API from "../../utils/api";

export const login = (email, password) => {
  return (dispatch) => {
    API.login(email, password, (res) => {
      console.log("Results: ", res.data);
      dispatch({
        type: "LOGIN",
        payload: { email, token: res.data.id, userId: res.data.userId },
      });
    });
  };
};

export const register = (email, password) => {
  return {
    type: "REGISTER",
    payload: { email, password },
  };
};

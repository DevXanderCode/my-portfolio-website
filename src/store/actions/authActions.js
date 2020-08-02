import API from "../../utils/api";

export const login = (email, password) => {
  return (dispatch) => {
    API.login(email, password, (res) => {
      console.log("Results: ", res.data);
      dispatch({
        type: "LOGIN",
        payload: { email, password },
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

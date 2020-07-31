const { default: Login } = require("../../components/Pages/Login");

export const login = (email, password) => {
  return {
    type: "LOGIN",
    payload: { email, password },
  };
};

export const register = (email, password) => {
  return {
    type: "REGISTER",
    payload: { email, password },
  };
};

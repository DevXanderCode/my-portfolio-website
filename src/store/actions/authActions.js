const { default: Login } = require("../../components/Pages/Login");

export const login = (email, password) => {
  return {
    type: "LOGIN",
    payload: { email, password },
  };
};

import axios from "axios";

const host = "http://localhost:4000";
const API = () => {
  const login = (email, password, success) => {
    axios
      .post(`${host}/api/users/login`, { params: { email, password } })
      .then((res) => {
        success(res);
      });
  };
};

export default API;

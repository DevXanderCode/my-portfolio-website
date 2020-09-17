import axios from "axios";

const host = "http://localhost:4000";
const API = {
  login: (email, password, success) => {
    axios.post(`${host}/api/users/login`, { email, password }).then((res) => {
      success(res);
    });
  },
  getUsers: (token, success) => {
    axios.get(`${host}/api/users?access_token=${token}`).then((res) => {
      success(res);
    });
  },
  getPosts: (token, success) => {
    axios.get(`${host}/api/Posts?access_token=${token}`).then((res) => {
      success(res);
    });
  },
};

export default API;

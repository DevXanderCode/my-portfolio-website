import API from "../../utils/api";

export const getUsers = (token) => {
  return (dispatch) => {
    API.getUsers(token, (res) => {
      dispatch({
        type: "GOT_USERS",
        payload: res.data,
      });
    });
  };
};

export const getPosts = (token) => {
  return (dispatch) => {
    API.getPosts(token, (res) => {
      dispatch({
        type: "GOT_POSTS",
        payload: res.data,
      });
    });
  };
};

export const addPost = (post, token) => {
  return (dispatch) => {
    API.addPost(token, (res) => {
      dispatch({
        type: "POST_ADDED",
        payload: res.data,
      });
    });
  };
};

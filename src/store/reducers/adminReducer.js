const defaultState = {
  users: [],
  posts: [],
};

const admin = (state = defaultState, action) => {
  switch (action.type) {
    case "GOT_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "GOT_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default admin;

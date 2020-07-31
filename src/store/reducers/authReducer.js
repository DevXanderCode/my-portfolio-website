const defaultState = {
  user: {},
  token: null,
};

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        token: 1,
      };

    default:
      return state;
  }
};

export default auth;

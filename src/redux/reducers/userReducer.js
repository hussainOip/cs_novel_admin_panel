const api_state = {
  user: [],
};

const userReducer = (state = api_state, action) => {
  // console.log(action.payload, '=========reducer')

  switch (action.type) {
    case "GET_USERLISTS":
      return {
        user: [...action.payload],
      };
    case "USER_LOGIN":
      return {
        ...state,
        userData: action.payload,
        accessToken: action.payload.token,
      };
    default:
      return state;
  }
};

export default userReducer;

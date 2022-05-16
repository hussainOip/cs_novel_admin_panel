const api_state = {
  accessToken: "",
  userData: null,
  userlist: [],
  userCount:""
};

const userReducer = (state = api_state, action) => {
  switch (action.type) {
    case "GET_USERLISTS":
      return {
        ...state,
        userlist: [ ...action.payload.data],
        userCount: action.payload.totalData
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

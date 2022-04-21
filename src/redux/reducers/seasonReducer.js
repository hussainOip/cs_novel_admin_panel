const api_state = {
  user: [],
};

const seasonReducer = (state = api_state, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case "GET_SEASONS":
      return {
        user: [...action.payload],
      };
    case "UPDATE_SEASON":
      let arr = [...state.user];
      return {
        ...state,
        user: arr,
      };
    case "DELETE_SEASON":
      const indexx = arr.findIndex(
        (season) => season._id === action.payload.id
      );
      arr[indexx] = { ...action.payload };
      let array = [...state.user];
      console.log(array);
      return {
        ...state,
        user: arr,
      };
    default:
      return state;
  }
};
export default seasonReducer;

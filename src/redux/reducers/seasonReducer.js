const api_state = {
  season: [],
};

const seasonReducer = (state = api_state, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case "GET_SEASONS":
      return {
        ...state,

        season: [...action.payload],
      };
    case "UPDATE_SEASON":
      let arr = [...state.season];
      return {
        ...state,
        season: arr,
      };
    case "DELETE_SEASON":
      const indexx = arr.findIndex(
        (season) => season._id === action.payload.id
      );
      arr[indexx] = { ...action.payload };
      let array = [...state.season];
      console.log(array);
      return {
        ...state,
        season: arr,
      };
    default:
      return state;
  }
};
export default seasonReducer;

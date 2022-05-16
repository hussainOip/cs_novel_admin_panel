const api_state = {
  book: [],
};

const formBookReducer = (state = api_state, action) => {
  // console.log(action.payload)
  switch (action.type) {
    case "GET_BOOK":
      return {
        ...state,

        book: [...action.payload],
      };
      // case "GET_SEASONS":
      //   return{
      //     user: [...action.payload]
      //   }
    case "ADD_BOOK":
      return {
        ...state,
      };
    case "UPDATE_BOOK":
      // console.log(action.payload)
      let arr = [...state.book];

      const index = arr.findIndex((book) => book._id === action.payload.id);
      // arr[index] = { ...action.payload }
      // console.log(index)
      return {
        ...state,
        book: arr,
      };
    case "DELETE_BOOK":
      const indexx = arr.findIndex((book) => book._id === action.payload.id);
      arr[indexx] = { ...action.payload };
      let array = [...state.book];
      console.log(array);
      return {
        ...state,
        book: arr,
      };
    // const index = state.user.map(item=>item._id===action.payload.id)
    default:
      return state;
  }
};
export default formBookReducer;

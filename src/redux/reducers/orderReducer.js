const INITIAL_STATE = {
  order: [],
  orderCount: "",
};
const orderReducer = (state = INITIAL_STATE, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "GET_ORDER_LIST":
      console.log(action.payload)
      return {
        ...state,
        order: [...action.payload.data],
        orderCount: action.payload.totalData,
      };
    default:
      return state;
  }
};
export default orderReducer;

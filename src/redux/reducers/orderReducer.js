const INITIAL_STATE={
    data:[]
}
const orderReducer=(state=INITIAL_STATE,action)=>{
    // console.log(action.payload);
    switch(action.type){
        case "GET_ORDER_LIST":
          // let arr = [...state.user];
          // const index= arr.findIndex((orders)=>orders._id===action.payload)
          // console.log(index);
      return {
        user: [...action.payload],
      };
            default: 
            return state
    }
}
export default orderReducer
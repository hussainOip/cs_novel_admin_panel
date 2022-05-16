const INITIAL_STATE={
    data:[]
}
const descriptionReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
      case "GET_ALL_PARA":
        return{
          ...state,
          data: [...action.payload],
        }
            default: 
            return state
    }
}
export default descriptionReducer
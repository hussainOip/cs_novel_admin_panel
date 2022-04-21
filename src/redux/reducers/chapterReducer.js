const INITIAL_STATE={
    data:[]
}
const chapterReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "GET_ALL_CHAPTERS":
      return {
        user: [...action.payload],
      }
      case "CHAPTER_UPDATED":
      let arr = [...state.user];
      return {
        ...state,
        user: arr,
      };
            default: 
            return state
    }
}
export default chapterReducer
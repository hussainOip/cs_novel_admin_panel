const INITIAL_STATE={
  chapters:[]
}
const chapterReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "GET_ALL_CHAPTERS":
      return {
        ...state,

        chapters: [...action.payload],
      }
      case "CHAPTER_UPDATED":
      let arr = [...state.user];
      return {
        ...state,
        updatedChapter: arr,
      };
            default: 
            return state
    }
}
export default chapterReducer
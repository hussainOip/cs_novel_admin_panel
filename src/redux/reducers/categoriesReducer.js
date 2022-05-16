const api_state = {
	categories : []
}

const categoriesReducer = (state = api_state, action) => {
	
	// console.log(action.payload, '====== get category data =======')
	
	switch (action.type) {
		case 'GET_CATEGORIES': 
		return {
			...state,
			categories : [...action.payload]
		}
	
		default: return state
	}
}


export default categoriesReducer
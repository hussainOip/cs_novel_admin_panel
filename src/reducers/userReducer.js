const api_state = {
	user : []
}

const userReducer = (state = api_state, action) => {

	// console.log(action.payload, '=========reducer')
	
	switch (action.type) {
		case 'GET_USERLISTS': 
		return {
			user : [...action.payload]
		}
	
		default: return state
	}
}


export default userReducer
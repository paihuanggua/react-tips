import {combineReducers} from 'redux';




function what(state=false,action){
	switch (action.type) {
		case 'YES':
			return !action.aaa;
		default:
			return false;
	}
}






export default combineReducers({
	what
})




































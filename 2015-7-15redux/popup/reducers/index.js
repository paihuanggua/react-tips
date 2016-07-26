import {combineReducers} from 'redux';




function what(state=false,action){
	switch (action.type) {
		case 'YES':
			return !action.falseOrtrue;
		default:
			return false;
	}
}






export default combineReducers({
	what
})




































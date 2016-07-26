import {combineReducers} from 'redux';


function tabs(state=[],action){
	switch (action.type) {
		case 'ALL_TABS':
			return action.tabs.map(tab=>{
				return Object.assign({},tab,{
					isBlock:false,
					isOn:false
				})
			});
		case 'SHOW_ONE':
			let tabs=[];
			for(var i=0;i<action.tabs.length;i++){
				state[i].isOn=false;
				state[i].isBlock=false;
			}
			action.tabs[action.id].isOn=true;
			action.tabs[action.id].isBlock=true;
			for(var i=0;i<action.tabs.length;i++){
				tabs[i]=action.tabs[i]
			}
			return tabs;
		default:
			return state;
	}
}






export default combineReducers({
	tabs
})




































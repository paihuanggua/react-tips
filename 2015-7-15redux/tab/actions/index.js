import tabs from '../api/tab.json';


function receiveTabs(tabs){
	return{
		type:'ALL_TABS',
		tabs:tabs
	}
}

export function getAllTabs(){
	return (dispatch)=>{
		dispatch(receiveTabs(tabs))
	}
}



function showOne(tabs,id){
	return{
		type:'SHOW_ONE',
		id:id,
		tabs:tabs
	}
}

export function turn(id){
	return (dispatch,getState)=>{
		let tabs=getState().tabs;
		dispatch(showOne(tabs,id))
	}
}









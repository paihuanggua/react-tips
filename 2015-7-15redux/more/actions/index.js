function change(aaa){
	return{
		type:'YES',
		aaa:aaa
	}
}
export default function showOrhide(){
	return (dispatch,getState)=>{
		let boolean=getState().what;
		dispatch(change(boolean))
	}
}
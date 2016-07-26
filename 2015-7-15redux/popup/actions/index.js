function showOrHide(aaa){
	return{
		type:'YES',
		falseOrtrue:aaa
	}
}
export default function doShowOrHide(){
	return (dispatch,getState)=>{
		dispatch(showOrHide(getState().what))
	}
}




















































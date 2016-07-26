import React,{Component} from 'react';


export default class Popup extends Component {
	constructor(props) {
	  super(props);
	}
	render(){
		const {showOrhide,doShowOrHide}=this.props;
		return(
			<div className="popup" style={{display:showOrhide?'block':'none'}}>
				<div className="shadow"></div>
				<div className="box">
					fjdklfjsdl
					<input type="button" defaultValue="隐藏" onClick={()=>doShowOrHide()} />
				</div>
			</div>
		)
	}
}























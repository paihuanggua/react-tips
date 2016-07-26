import React,{Component} from 'react';

export default class Showbox extends Component {
	render(){
		const {showOrhide}=this.props;
		return(
			<div style={{display:showOrhide?'block':'none'}} className="box"></div>
		);
	}
}








































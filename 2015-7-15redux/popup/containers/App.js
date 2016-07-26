import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import Popup from '../components/popup'
import doShowOrHide from '../actions'


export default class App extends Component {
	render(){
		const {showOrhide,doShowOrHide}=this.props;
		return(
			<div>
				<button onClick={()=>doShowOrHide()}>点击弹出</button>
				<Popup showOrhide={showOrhide} doShowOrHide={doShowOrHide} />
			</div>
		)
	}
}


const mapStateToProps=(state)=>({
	showOrhide:state.what
})

export default connect(mapStateToProps,{doShowOrHide})(App);



































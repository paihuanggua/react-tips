import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Showbox from '../components/showbox';
//action
import changeState from '../actions';


export default class App extends Component {
	render(){
		const {showOrhide,changeState}=this.props;
		return(
			<div className="more_box" onClick={()=>changeState()}>
				更多
				<Showbox showOrhide={showOrhide} />
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		showOrhide:state.what
	}
}

export default connect(mapStateToProps,{changeState})(App)




































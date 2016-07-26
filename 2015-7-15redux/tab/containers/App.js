import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import ControllerUnits from '../components/controllerUnits'
import Boxes from '../components/Boxes';
import {turn} from '../actions';


export default class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.turnwhatId=this.turnwhatId.bind(this);
	}
	componentDidMount(){
		const {dispatch}=this.props;
		dispatch(turn(0))
	}
	turnwhatId(nextid){
		this.props.dispatch(turn(nextid))
	}
	render(){
		const {tabs}=this.props;
		return(
			<div>
				<ControllerUnits tabs={tabs} turn={this.turnwhatId} />
				<Boxes tabs={tabs} />
			</div>
		)
	}
}


function mapStateToProps(state){
	return{
		tabs:state.tabs
	}
}

export default connect(mapStateToProps)(App)



































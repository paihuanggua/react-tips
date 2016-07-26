import React,{Component} from 'react';


export default class ControllerUnits extends Component {
	render(){
		const {tabs,turn}=this.props;
		return(
			<div>
				{tabs.map((tab,id)=>
					<input
						className={tab.isOn?'on':''}
						key={id}
						type="button"
						value={tab.title}
						onClick={()=>turn(id)}
					/>
				)}
			</div>
		)
	}
}
















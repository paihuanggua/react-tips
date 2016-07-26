import React,{Component} from 'react';




export default class Boxes extends Component {
	render(){
		const {tabs}=this.props;
		return(
			<div>
				{tabs.map((tab)=>
					<div className="box" key={tab.id} style={{display:tab.isBlock?'block':'none'}}>
						{tab.boxValue}
					</div>
				)}
			</div>
		)
	}
}
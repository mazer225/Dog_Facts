import React from 'react';
import 'tachyons';

class InputBox extends React.Component {
	constructor() {
		super();
		this.state = {
			valueInputBox: 0
		};
	}

	valueEnter = () => {
		console.log("hello");
		let inputVal = document.getElementById('myInput').value;
		return inputVal;
	}

	render() {
		return(
			<div>
				<input type="text" placeholder="Enter the Number of Cards..." id="myInput" onKeyPress={(e) => e.key === "Enter" && this.props.ButtonClicked(this.valueEnter())} className="ma3 w-20"/>
				<button onClick={() => this.props.ButtonClicked(this.valueEnter())}>Enter!</button>
			</div>
		);
	}
}

export default InputBox;
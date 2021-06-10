import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<div className="tc">
				<div className="f-subheadline lh-title bg-washed-red ma0">
					<span className="dark-red fw9 ">DOG </span><span className="fw7 ">FACTS</span>
				</div>
				<h3 className="bg-light-green mt0">Dogs leave paw prints forever on our hearts</h3>
			</div>
		);
	}
}	

export default Header;
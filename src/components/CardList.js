import React from 'react';
import 'tachyons';
import Card from './Card';
import './CardList.css';

class CardList extends React.Component {

	render() {

		let cardArray = [];

		console.log("here",this.props.NoOfCards);
		for(let i=0;i<this.props.NoOfCards;i++){
			cardArray.push(<Card key={i} alt={`Loading Image ${i}`} />);
		}
		
		return(
			<div className="positionCards">
				{cardArray}
			</div>
		);
	};

}

export default CardList;
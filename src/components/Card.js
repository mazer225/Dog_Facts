import React from 'react';
import 'tachyons';
import './Card.css';



class Card extends React.Component {
	constructor() {
		super();
		this.state ={
			url :"",
			name: "",
			used: "",
			characteristics: "",
			lifeSpan: ""
		};
	}

	async componentDidMount() {
		// fetch("https://dog.ceo/api/breeds/image/random").then(resp=>resp.json()).then(res=>this.setState({url: res.message}));
		let resp = await fetch("https://api.thedogapi.com/v1/images/search");
		let data = await resp.json();

		// console.log("before",data[0].breeds[0].bred_for);
		if(data[0].breeds.length===0) {
			while(data[0].breeds.length===0) {
				resp = await fetch("https://api.thedogapi.com/v1/images/search");
				data = await resp.json();				
			}
		}

		console.log("after",data[0].breeds[0].bred_for);

		this.setState({url: data[0].url});
		this.setState({name: data[0].breeds[0].name});
		this.setState({used:  data[0].breeds[0].bred_for});
		this.setState({characteristics:  data[0].breeds[0].temperament});
		this.setState({lifeSpan: data[0].breeds[0].life_span});
	}

	render() {
		const {url,name,used,characteristics,lifeSpan} = this.state;

		return (
			<div className="bg-light-blue dib pa3 ma3 grow br4 bw2 shadow-5 ma0 container"> {/*//w-40 h-50 */}
				<img src={url} className="positionImage mr3" alt="Loading Image"/>
				<div className="tl">
					<span className="styleTopics">Name: </span><span>{name}</span>
					<br />
					<span className="styleTopics">Job: </span><span>{used}</span>
					<br />
					<span className="styleTopics">Characteristics: </span><span>{characteristics}</span>
					<br />
					<span className="styleTopics">Life Span: </span><span>{lifeSpan}</span>
					<br />
				</div>
			</div>
		);
	}
}

export default Card;
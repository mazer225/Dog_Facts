import React from 'react';
import './App.css';
import Header from '../components/Header';
import InputBox from '../components/InputBox';
import CardList from '../components/CardList';


class App extends React.Component { 

  constructor() {
    super();
    this.state = {
      NumberOfCards: 4
    };
    this.InputAction = this.InputAction.bind(this);
  }

  InputAction (value1) {

    this.setState({NumberOfCards:value1});

    console.log("another",this.state.NumberOfCards);
  }

  render() {
    console.log("render",this.state.NumberOfCards);
    return (
      <div className="tc">
        <Header />
        <InputBox ButtonClicked={this.InputAction}/>
        <div>
          <CardList NoOfCards={this.state.NumberOfCards}/>
        </div>
      </div>
      );
  }
}

export default App;

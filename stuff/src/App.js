import React, { Component } from 'react';

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      message: ".",
      count: 0,
      onAndOff: false
    }
  }

  changeMsg = () => {
    console.log(this.state.onAndOff + " - " + this.state.count);
    this.setState(prevState => ({
      message: "new message",
      count: this.state.count + 1,
      onAndOff: !prevState.onAndOff
    }));
  }

  render() {
    return (
      <div>
        <h1> { this.state.message } </h1>
        <h2> { this.state.count } </h2>
        <h3> { this.state.onAndOff.toString() } </h3>
        <button onClick={this.changeMsg}>Do Something</button>
      </div>
    )
  }
}

import React, { Component } from 'react';
import FormY from './FormY.js';

export default class App extends Component {

  state = {
      message: "",
      count: 0,
      onAndOff: false,
      user: "Bob"
    }

    // componentDidMount() {
    //   console.log("componentDidMount");
    // }
  
    // componentDidUpdate() {
    //   console.log("componentDidUpdate");
    // }

  changeMsg = (e) => {
    // console.log(this.state.onAndOff + " - " + this.state.count);
    console.log("e: ", e.target)
    this.setState({
      message: "new message",
      count: this.state.count + 1,
      onAndOff: !this.state.onAndOff
    });
  }

  handleChange = e => {
    console.log("e.target.value: ", e.target.value);
    this.setState({
      message: e.target.value
    });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
    console.log("handleSubmit " + this.state.count);
  }

  checkUser = (user) => {
    if (user.toLowerCase() === this.state.user.toLowerCase())
      return true;
    
    return false;

  }

  render() {
    return (
      <>
        <h1> {this.state.message} {this.state.count} </h1>
        <h3> {this.state.onAndOff.toString()} </h3>
        <button onClick={this.changeMsg}>Do Something</button>

        <form onSubmit={this.handleSubmit}>
          <label>New Message:
            <input type="text" value={this.state.message} onChange={this.handleChange} />
          </label>
          <button>Submit</button>
        </form>

        <FormY checkUser={this.checkUser}/>
      </>
    )
  }
}

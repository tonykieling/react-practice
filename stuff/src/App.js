import React, { Component } from 'react';

export default class App extends Component {

  state = {
      message: "",
      count: 0,
      onAndOff: false
    }

    componentDidMount() {
      console.log("componentDidMount");
    }
  
    componentDidUpdate() {
      console.log("componentDidUpdate");
    }

  changeMsg = () => {
    console.log(this.state.onAndOff + " - " + this.state.count);
    this.setState({
      message: "new message",
      count: this.state.count + 1,
      onAndOff: !this.state.onAndOff
    });
  }

  handleChange = e => {
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
      </>
    )
  }
}

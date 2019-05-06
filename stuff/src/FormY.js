import React, { Component } from 'react'

export default class FormY extends Component {

  constructor(props){
    super(props);
    this.state = {
      formText: ""
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    // console.log("inside handleSubmit, user: ", this.state.formText);

    if (this.props.checkUser(this.state.formText)) {
      alert('Alright!!')
      return
    }
    alert("NOT OK!")
  }

  handleChange = e => {
    this.setState({
      formText: e.target.value
    });
  }

  isValid = () => {
    if (this.state.formText === "")
      return false;
    return true;
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.formText} onChange={this.handleChange}/>
            <button disabled={!this.isValid()} type="submit">Submit</button>
          </form>
      </div>
    )
  }
}

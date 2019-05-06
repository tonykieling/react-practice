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
    console.log("inside handleSubmit, user: ", this.state.formText);
    if (this.props.checkUser(this.state.formText)) {
      alert('Alright!!')
      return
    }
    alert("NOT OK!")
  }

  handleChange = e => {
    // if (e.target.value === 'aa')
      // console.log("inside handleChange method 'a'", e.target.value);
    this.setState({
      formText: e.target.value
    });
    console.log("e: ", e.target.value)
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.formText} onChange={this.handleChange}/>
            <button>Submit</button>
          </form>
      </div>
    )
  }
}

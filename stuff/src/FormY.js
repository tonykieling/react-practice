import React, { Component } from 'react'

export default class FormY extends Component {

  constructor(props){
    super(props);
    this.state = {
      formText: ""
    }
  }

  // React form
  // # FIRST WAY: using an in inside the form
  //  should use e.target.nameOfTheId.value
  //  BUT, THERE IS NO VALIDATION due to dont check on handleChange
  // # SECOND WAY: write the value directly in a variable using this.setState and retrieve from that variable
  //  there is the necessity of a specific variable to manage this situation
  //  and also a handleChange method to keeping track of the changes on the variable's content
  // # THRID WAY: using Redux

  // # FORTHY WAY: 

  handleSubmit = e => {
    e.preventDefault();
    console.log("inside handleSubmit, e.target.userId: ", e.target.userId.value);
    console.log("inside handleSubmit, e.target: ", e.target);
    // controlled components react forms:
    //    https://reactjs.org/docs/forms.html#controlled-components
    // https://www.youtube.com/watch?v=3BZZg3lS2SA
    // if (this.props.checkUser(this.state.formText)) {
    //   alert('Alright!!')
    //   return
    // }
    // alert("NOT OK!")
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
            <input 
              type="text"
              id = "userId"
              value={this.state.formText}
              onChange={this.handleChange}
              placeholder="type something here"/>
            <button
              disabled={!this.isValid()}
              type="submit">Submit
            </button>
          </form>
      </div>
    )
  }
}

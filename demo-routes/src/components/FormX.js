import React from 'react';
import ReactModal from 'react-modal'
import {Button, Form} from 'react-bootstrap'
import { connect } from 'react-redux'

ReactModal.setAppElement('#root');

const user = {
  name: "bob",
  password: "bob"
}

const customStyles = {
  content : {
    // width: "100%",
    // height: "100%",
    // left: "0",
    // top: "0"
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class FormX extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: true,
      showAlertModal: false,
      name: "",
      password: ""
    }
  }

  handleAlertModal = () => {
    this.setState({
      showAlertModal: false
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
    this.props.history.push("/")
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.name === user.name && this.state.password === user.password){
      this.setState({
        showModal: false,
        showAlertModal: false
      })
      console.log("bob is logged")
      this.props.setUser(user.name)
      console.log("this.props.history: ", this.props.history)
      this.props.history.push("/about")
      return true
    } else {
      this.setState({
        name: "",
        password: ""
      })
      this.setState({
        showAlertModal: true
      })
      this.inputRef.focus()
      return false
    }
  }

  customStyles = {
    content: {
      width: "100%",
      height: "100%",
      left: "0",
      top: "0"
    }
  }

  render() {
    return (
      <div className="moldura">

      <ReactModal
        isOpen = {this.state.showModal}
        style = {customStyles}
      >
        <h1>Modal</h1>
        <h3>Form</h3>
          <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>User / Email address</Form.Label>
                  <Form.Control
                      autoFocus
                      ref={(input) => { this.inputRef = input }}
                      type="name"
                      placeholder="Type the user's name"
                      name="name"
                      onChange={this.handleChange}
                      value={this.state.name}
                  />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                  />
              </Form.Group>

              <Button variant="primary" type="submit" size="lg">
                Submit
              </Button>
              <Button variant="danger" onClick={this.handleCloseModal} size="lg">
                Close
              </Button>
          </Form>
      </ReactModal>

      <ReactModal
        isOpen = {this.state.showAlertModal}
        style = {customStyles}
      >
        <h3>Error!</h3>
        <h4>name/password wrong</h4>
          <Button variant="warning" onClick={this.handleAlertModal} size="lg" block>
            Ok
          </Button>
      </ReactModal>

    </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch({type:"SET_USER", data: user}),
    noUser: () => dispatch({type:"NO_USER", data: ""})
  }
}

export default connect(null, mapDispatchToProps)(FormX);

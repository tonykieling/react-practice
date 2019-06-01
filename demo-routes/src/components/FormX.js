import React from 'react';
import ReactModal from 'react-modal'
import {Button, Form} from 'react-bootstrap'
// import './App.css';
// import { Redirect } from 'react-router-dom'

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

  // handleOpenModal = () => {
  //   this.setState({
  //     showModal: true
  //   })
  // }

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
        showModal: false
      })
      this.props.history.push("/")
      return true
    } else {
      this.setState({
        name: "",
        password: ""
      })
      // alert("name/password are incorrect")
      this.setState({
        showAlertModal: true
        // showModal: false
      })
      // this.textInput.focus()
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
                      // autoFocus
                      ref={(input) => { this.inputRef = input }}
                      type="name"
                      placeholder="Type the user's name"
                      name="name"
                      onChange={this.handleChange}
                      value={this.state.name}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
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

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button variant="danger" onClick={this.handleCloseModal}>
                Close Modal
              </Button>
          </Form>
      </ReactModal>

      <ReactModal
        isOpen = {this.state.showAlertModal}
        style = {this.customStyles}
      >
        <h1>Behhhhh</h1>
        <h3>Wrong</h3>
              <Button variant="danger" onClick={this.handleAlertModal}>
                Close Modal
              </Button>
      </ReactModal>

    </div>
    );
  }
}

export default FormX;

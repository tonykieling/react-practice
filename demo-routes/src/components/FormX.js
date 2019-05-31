import React from 'react';
// import './App.css';
import ReactModal from 'react-modal'
import {Button, Form} from 'react-bootstrap'

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
      showModal: false,
      name: "",
      password: ""
    }
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    // e.preventDefault()
    console.log("handlesubmit")
    if (this.state.name === user.name && this.state.password === user.password){
      this.setState({
        showModal: false
      })
      return true
    } else {
      // alert("name/password are incorrect")
      this.setState({
        name: "",
        password: ""
      })
      alert("name/password are incorrect")
      return false
    }
  }

  customStyles = {
    content: {
      left: "50%",
      width: 200
    }
  }

  render() {
    return (
      <div className="moldura">
      <ReactModal
        isOpen = {this.state.showModal}
        style = {customStyles}
        // contentLabel = {"react model test"}
      >
        <h1>Modal</h1>
        <h3>Form</h3>
          <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>User / Email address</Form.Label>
                  <Form.Control
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
    </div>
    );
  }
}

export default FormX;

import React from 'react';
import ReactModal from 'react-modal'
import {Button} from 'react-bootstrap'

ReactModal.setAppElement('#root');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Error extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAlertModal: true
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
    this.props.history.push("/")
  }

  render() {
    return (
      <div className="moldura">
      <ReactModal
        isOpen = {this.state.showAlertModal}
        style = {customStyles}
      >
        <h3>Error!</h3>
        <p>This page does not exist.</p>
          <Button variant="warning" onClick={this.handleCloseModal} size="lg" block>
            Ok
          </Button>
      </ReactModal>

    </div>
    );
  }
}

export default Error;

import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
  render () {
    console.log("user: ", this.props.user)
    const user = this.props.user
    return (
      <div>
        {(user) ?
          `${user} is connected` :
          "no user connected"
        }
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user
  }
}

export default connect(mapStateToProps, null)(User)
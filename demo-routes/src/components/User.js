import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {

  userLogged = (user) => {
    console.log("inside userlogged: ", user)
    return(
      <div>
        {user} is logged
        <button onClick={() => {
          this.props.noUser()
        }}>
          Quit
        </button>
      </div>
    )
  }

  noUserLogged = () => {
    return(
      <div>
        No user looged
      </div>
    )
  }
  
  render () {
    console.log("user: ", this.props.user)
    const user = this.props.user
    return (
      <div>
        {(user) ?
          this.userLogged(user) :
          this.noUserLogged()
          // `${user} is connected` :
          // "no user connected"
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

const mapDispatchToProps = dispatch => {
  return {
    noUser: () => dispatch({type: "NO_USER"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
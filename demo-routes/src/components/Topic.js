// Route Params
// https://scotch.io/courses/using-react-router-4/route-params

import React, { Component } from 'react'

export default class Topic extends Component {
  render() {
    // console.log("props: ", this.props)
    return (
      <div>
            <h3>Requested Param: (gues what? new!) {this.props.match.params.id}</h3>
      </div>
    )
  }
}

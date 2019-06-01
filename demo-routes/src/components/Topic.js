// Route Params
// https://scotch.io/courses/using-react-router-4/route-params

import React, { Component } from 'react'

export default class Topic extends Component {
  render() {
    return (
      <div>
            <h3>Requested Param: {this.props.match.params.id}</h3>
      </div>
    )
  }
}

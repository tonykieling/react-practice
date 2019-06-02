import React from 'react'
import { Link } from 'react-router-dom'
import User from './User.js'

export default function Header() {
  return (
    <ul>
      <li>
        <Link to="/" > Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
      <li>
        {/* <Link to={{
          pathname: "/form",
          state: {
            modalOn: true
          }
        }}> */}
        <Link to="/form">
          Form
        </Link>
      </li>
      <h4 className="userConnected">
        <User />        
      </h4>
    </ul>
  );
}

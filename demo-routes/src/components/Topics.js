import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Topic from './Topic.js'


function Topics({ match }) {
  return (
    <div>
      <h2>Topics - new</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
        <li>
          <Link to={`${match.url}/test`}>Test</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
{/* -----------------------------------------------------------------------------------
  THIS.PROPS carries also HISTORY, LOCATION AND MATCH
  here, match will have the dynamic value to :id as
  this.props.match.params.id (in the child component, which receives props) 
----------------------------------------------------------------------------------- */}

      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

export default Topics;
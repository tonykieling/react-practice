import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home.js'
import About from './components/About.js'
import Topics from './components/Topics.js'
import Header from './components/Header.js'
import FormX from './components/FormX.js'
import Error from './components/Error.js'

function App() {
  return (
    <Router>
      <div>
        <Header />

        {/* routes */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route exact path="/form" component={FormX} />
          {/* <Route path="/form" exact render = {(props) => (
            <FormX {...props} value={true} />
          )} /> */}
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
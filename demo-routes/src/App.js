import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home.js'
import About from './components/About.js'
import Topics from './components/Topics.js'
import Header from './components/Header.js'

function App() {
  return (
    <Router>
      <div>
        <Header />

        {/* routes */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />

      </div>
    </Router>
  );
}

export default App;
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { CV } from './CV';
import { Work } from './Work';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Router>
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route path = "/about" component = {About} />
              <Route path = "/work" component = {Work} />
              <Route path = "/cv" component = {CV} />
              <Route path = "/contact" component = {Contact} />
              <Route component = {NoMatch} />
            </Switch>
          </Router>
      </React.Fragment>
    );
  }
}

export default App;

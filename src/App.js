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
          <div class = "container-fluid" style={{height: "100vh"}}>
            <p>I'm kola heyward-rotimi. I'm an incoming PhD student at Stanford. I was a Faculty Research Assistant at the University of Maryland, College Park. Here are some things I've written:</p>
            <p>"Sifting Through the Future-Present"</p>
            <p>"The Barn"</p>
            <p>"E.I."</p>
            <p>"Qubit Guarantee"</p>
            <p>"An Exploration of Nichole Otieno's Early Filmography (1232-1246)"</p>
            <p><a href = "https://www.fiyahlitmag.com/issues/issue-9/" target="_blank" rel="noopener noreferrer">"Gloss"</a></p>
            <p>"The Father"</p>
            <p>here's my CV and twitter. kolaheywardrotimi @ gmail . com</p>
          </div>
      </React.Fragment>
    );
  }
}

export default App;

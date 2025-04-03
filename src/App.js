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
import styled from 'styled-components';

const Text = styled.div`
    font-family: "Pragati Narrow";
    color: black;
    font-size: 50pt;
    text-align: justify;
    line-height: 60px;
    margin-bottom: 30px;
    word-wrap: break-word;
    adjustsFontSizeToFit={true};
    numberOfLines={1};

    a {
        color: black;
        //text-transform: uppercase;
        text-decoration: underline;
    }
`;

const Backer = styled.div`
//background-image: linear-gradient(0deg, rgba(1,81,38,1) 0%, rgba(79,158,78,1) 35%, rgba(184,230,184,0.5779353977919293) 100%);
width: min-vw-100;
height: min-vh-100;
background-size: cover;
position: center;
background-size: cover;
background-attachment: fixed;
background-repeat: no-repeat;
overflow: auto;
`;

class App extends Component {
  render() {
    return (
      <Backer>
      <React.Fragment>
        <div class = "container-fluid" style={{height: "100vh"}}>
            <Text><p>Hello! I'm Kola, a fiction writer and PhD student in Modern Thought and Literature at <a href = "https://mtl.stanford.edu/people/kolawole-heyward-rotimi" target="_blank">Stanford</a>, researching virtuality and its influence on urban environments.</p>
            <p><center>⬤</center></p>
            <p>Here are some things I've written:</p>
            <p>•<a href = "https://www.mediapolisjournal.com/2023/03/corporate-afrofuturism/" target = "_blank">Corporate Afrofuturism: Development Strategies for African Smart Cities</a></p>
            <p>•<a href = "https://reviewsindh.pubpub.org/pub/black-meme/release/1" target = "_blank">Review: BLACK MEME</a></p>
            <p>•<a href = "https://logicmag.io/clouds/" target="_blank">The Barn</a></p>
            <p>•<a href = "https://reckoning.press/reckoning-6/" target="_blank">E.I.</a></p>
            <p>•<a href = "https://bloodknife.com/sifting-through-the-future-present/" target="_blank">Sifting Through the Future-Present</a></p>
            <p>•<a href = "https://two.compost.digital/qubit-guarantee/" target="_blank">Qubit Guarantee</a></p>
            <p>•<a href = "http://strangehorizons.com/fiction/an-exploration-of-nichole-otienos-early-filmography-1232-1246/" target="_blank">An Exploration of Nichole Otieno's Early Filmography (1232-1246)</a></p>
            <p>•<a href = "https://kola.legumenation.com/kola/index" target="_blank">Technological Disruptions: The Interplay of Subjective Flaws and Virtual Space</a></p>
            <p>•<a href = "https://www.fiyahlitmag.com/issues/issue-9/" target="_blank" rel="noopener noreferrer">Gloss</a></p>
            <p>•<a href = "https://clarkesworldmagazine.com/heyward-rotimi_10_15/" target="_blank">The Father</a></p>
            <p><center>⬤</center></p>
            <p>Here's my <a href = "https://drive.google.com/file/d/1yvXytyBsTRYHSQjrS-0s-oUjgHSFdyNo/view?usp=sharing" target="_blank">CV</a>.</p>
            <p style = {{ fontSize: '30pt' }}>kolaheywardrotimi at gmail.com // kolahr at stanford.edu</p></Text>
          </div>
      </React.Fragment>
      </Backer>
    );
  }
}

export default App;
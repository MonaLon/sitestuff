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
    font-family: Arial;
    color: black;
    font-size: 60pt;
    letter-spacing: -2px;
    line-height: 80px;
    margin-bottom: 30px;
    word-wrap: break-word;

    a {
        color: black;
        text-decoration: underline;
    }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div class = "container-fluid" style={{height: "100vh"}}>
            <Text><p>I'm Kola. I'm a Faculty Research Assistant at the <a href="https://mith.umd.edu/" target="_blank">University of Maryland, College Park</a>. I'll be a PhD student at <a href = "https://mtl.stanford.edu" target="_blank">Stanford</a> starting this Fall. Part of my work is speculative.</p>
            <p>⬤</p>
            <p>Here are some things I've written:</p>
            <p>•<a href = "https://reviewsindh.pubpub.org/pub/black-meme/release/1" target = "_blank">Review: BLACK MEME</a></p>
            <p>•<a href = "https://logicmag.io/clouds/" target="_blank">The Barn</a></p>
            <p>•<a href = "https://reckoning.press/reckoning-6/" target="_blank">E.I.</a></p>
            <p>•<a href = "https://bloodknife.com/sifting-through-the-future-present/" target="_blank">Sifting Through the Future-Present</a></p>
            <p>•<a href = "https://two.compost.digital/qubit-guarantee/" target="_blank">Qubit Guarantee</a></p>
            <p>•<a href = "http://strangehorizons.com/fiction/an-exploration-of-nichole-otienos-early-filmography-1232-1246/" target="_blank">An Exploration of Nichole Otieno's Early Filmography (1232-1246)</a></p>
            <p>•<a href = "https://kola.legumenation.com/kola/index" target="_blank">Technological Disruptions: The Interplay of Subjective Flaws and Virtual Space</a></p>
            <p>•<a href = "https://www.fiyahlitmag.com/issues/issue-9/" target="_blank" rel="noopener noreferrer">Gloss</a></p>
            <p>•<a href = "https://clarkesworldmagazine.com/heyward-rotimi_10_15/" target="_blank">The Father</a></p>
            <p>⬤</p>
            <p>Here's my <a href = "https://drive.google.com/file/d/1yvXytyBsTRYHSQjrS-0s-oUjgHSFdyNo/view?usp=sharing" target="_blank">CV</a> and <a href = "https://twitter.com/KolaHR" target="_blank">Twitter</a>.</p>
            <p style = {{ fontSize: '30pt' }}>kolaheywardrotimi at gmail.com</p></Text>
          </div>
      </React.Fragment>
    );
  }
}

export default App;

import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { NaviBar } from './components/NaviBar';
import backgroundWork from './assets/backgroundWork.jpg';
import { Layout } from './components/Layout';
import Theme from './Theme';
import { TextBlock } from './components/TextBlock';

const Background = styled.div`
        background-image: url(${backgroundWork});
        width: min-vw-100;
        height: min-vh-100;
        background-size: cover;
        position: center;
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        overflow: auto;
`;

const Text = styled.div`
    font-family: ${props => props.theme.font};
    color: ${props => props.theme.color.white};

    a {
        color: ${props => props.theme.color.white};
        text-decoration: underline;
    }
`;

export const Work = () => {
    return (
        <Background>
            <Theme>
                <div class = "container-fluid" style={{height: "100vh"}}>
                    <div class = "row-fluid">
                        <NaviBar></NaviBar>
                    </div>
                    <div class = "row justify-content-center align-items-center" style={{height: "80vh", margin: "20px"}}>
                            <TextBlock>
                                <Layout>
                                    <Text>
                                        <h4><b>Fiction</b></h4>
                                        <h4><a href = "http://clarkesworldmagazine.com/heyward-rotimi_10_15/" target="_blank" rel="noopener noreferrer">"The Father"</a>: sci-fi short story in <i>Clarkesworld</i> about a man bent on killing a Goddess that he helped to engineer.</h4>
                                        <h4><a href = "https://www.fiyahlitmag.com/issues/issue-9/" target="_blank" rel="noopener noreferrer">"Gloss"</a>: sci-fi short story in <i>FIYAH</i> about a man named Ace and his boyfriend, running a glitched out nightclub hidden inside an MMORPG.</h4>
                                        <h4><a href = "https://kolahr.itch.io/the-manual" target="_blank" rel="noopener noreferrer"><i>The Manual</i></a>: an interactive hybrid media piece about the process of creating digital artifacts.</h4>
                                        <h4><i>The Lightning Speaks for Us</i>: 110k-word adult dark fantasy manuscript.</h4>
                                        <h4><i>The Cartfield Incident</i>: 30k-word YA sci-fi novella.</h4>
                                        <h4><i>Newcomer</i>: 110k-word adult science-fantasy manuscript.</h4>
                                        <h4><i>Five Worlds</i>: adult space opera WIP.</h4>
                                        <h4><b>Non-Fiction</b></h4>
                                        <h4><a href = "https://kola.legumenation.com/kola/index" target="_blank" rel="noopener noreferrer"><i>Technological Disruptions: The Inerplay of Subjective Flaws and Virtual Space</i></a>: my undergrad English senior thesis, focused on creating a digital humanities framework to categorize and investigate events in virtual space that lead to conflict with an established status quo.</h4>
                                    </Text>
                                </Layout>
                            </TextBlock>
                    </div>
                </div>
            </Theme>
        </Background>
    );
};
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled, { withTheme } from 'styled-components';
import Image from 'react-bootstrap/Image';
import { NaviBar } from './components/NaviBar';
import backgroundAbout from './assets/backgroundAbout.jpg';
import headshot from './assets/headshot.jpg';
import { Layout } from './components/Layout';
import { TextBlock } from './components/TextBlock';
import Theme from './Theme';

const Background = styled.div`
        background-image: url(${backgroundAbout});
        width: 100vw;
        height: 100vh;
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

const ProfPic = styled.div`

`;

export const About = () => {
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
                                        <h4>Hey, thanks for visiting. My name's Kola, and I'm a speculative fiction writer and a junior scholar. I'm currently a Faculty Assistant at the University of Maryland's <a href="https://aadhum.umd.edu/" target="_blank" rel="noopener noreferrer">African-American History, Culture, and Digital Humanities initiative (AADHum)</a>. I'm from Durham, NC and I spent four years of my childhood/teens in Ile-Ife, Nigeria.</h4>
                                        <h4>At the moment, I'm researching how marginalized communities around the world implement emerging tech to change their social and physical (and digital) environments. My <a href="https://kola.legumenation.com/kola/index" target="_blank" rel="noopener noreferrer">undergrad thesis</a> specifically looked at how these communities used virtual spaces and technology in subversive ways. Moments of disruption never fail to interest me.</h4>
                                        <h4>My fiction is inspired by the same cultural and technological intersections--the new ways that the material world changes how people engage with each other. Though these narratives tend to manifest through prose, I've worked on some <a href="https://www.dropbox.com/sh/bgqnrvibjpxpcke/AACLSn9AVCGj3v5ew_IJsQg2a?dl=0" target="_blank" rel="noopener noreferrer">mixed media projects implementing video, glitch art, and fiction</a>. If you're looking for some straight prose, you can find my short stories in Clarkesworld and FIYAH.</h4>
                                        <h4>I have degrees in Computer Science and English from Amherst College, and I'm currently represented by <a href="https://www.mattbelford.com/" target="_blank" rel="noopener noreferrer">Matt Belford</a> at <a href="https://www.thetobiasagency.com/">the Tobias Literary Agency</a>. Check out my Twitter at <a href="https://twitter.com/KolaHR" target="_blank" rel="noopener noreferrer">@KolaHR</a>. Also, here's a <a href="https://raw.githubusercontent.com/MonaLon/sitestuff/main/src/assets/headshot.jpg" target="_blank" rel="noopener noreferrer">headshot</a>.</h4>
                                        <h4>You can view a .pdf of my CV <a href="https://rawcdn.githack.com/MonaLon/sitestuff/b59c16b44586e9debe73827dcda0d9f4c2fc9614/src/assets/K HR CV.pdf" target="_blank" rel="noopener noreferrer">here</a>.</h4>
                                    </Text>
                                </Layout>
                            </TextBlock>
                    </div>
                </div>
            </Theme>
        </Background>
    );
};
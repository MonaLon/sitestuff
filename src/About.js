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
        width: min-vw-100;
        height: min-vh-100;
        background-size: cover;
        position: center;
        background-repeat: no-repeat;
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
            <div class = "container-fluid min-vh-100">
            <Theme>
            <NaviBar></NaviBar>
                <div class = "row-fluid">
                    <div class = "col d-flex justify-content-center">
                        <TextBlock>
                            <ProfPic>
                                <Image alt = "profile pic" src={headshot} fluid class = "img-fluid" width = "300" height = "300"></Image>
                            </ProfPic>
                        </TextBlock>
                    </div>
                    <div class = "col d-flex justify-content-center">
                        <TextBlock>
                            <Layout>
                                <Text>
                                    <h4>Kola Heyward-Rotimi is a Faculty Assistant at the University of Maryland's <a href="https://aadhum.umd.edu/">African-American History, Culture, and Digital Humanities initiative (AADHum)</a>. He's originally from Durham, NC and he spent four years of his adolescence in Ile-Ife, Nigeria--his father’s birthplace and one of the cultural touchstones that he incorporates into his scholarship and genre-blending creative writing.</h4>
                                    <h4>In the digital humanities, Kola is focused on exploring the dynamics of emerging technologies in relation to marginalized communities within the US and abroad. His undergraduate thesis specifically looked at how these communities used virtual spaces and technology in ways that subverted their mainstream, intended use. These moments of disruption are his primary interest and Kola continues to expand on this work through his position at AADHum.</h4>
                                    <h4>His fiction is also inspired by these cultural and technological intersections--the new ways that the material world changes how people engage with each other. Though these narratives tend to manifest through prose, Kola has also developed mixed media projects implementing video, glitch art, and fiction. Kola’s speculative short stories can be found in Clarkesworld and FIYAH, and he was a writer-in-residence at Beijing's Red Gate Gallery in 2019.</h4>
                                    <h4>Kola has degrees in Computer Science and English from Amherst College, and he is currently represented by Matt Belford at the Tobias Literary Agency. You can find him on Twitter at <a href="https://twitter.com/KolaHR">@KolaHR</a>.</h4>
                                </Text>
                            </Layout>
                        </TextBlock>
                    </div>
                </div>
            </Theme>
            </div>
        </Background>
    );
};
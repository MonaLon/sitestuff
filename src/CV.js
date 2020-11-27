import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { NaviBar } from './components/NaviBar';
import backgroundCV from './assets/backgroundCV.jpg';
import { Layout } from './components/Layout';
import Theme from './Theme';
import { TextBlock } from './components/TextBlock';

const Background = styled.div`
        background-image: url(${backgroundCV});
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

export const CV = () => {
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
                                        <h4>You can view a detailed .pdf version <a href="https://rawcdn.githack.com/MonaLon/sitestuff/b59c16b44586e9debe73827dcda0d9f4c2fc9614/src/assets/K HR CV.pdf" target="_blank" rel="noopener noreferrer">here</a>.</h4>
                                    </Text>
                                </Layout>
                            </TextBlock>
                    </div>
                </div>
            </Theme>
        </Background>
    );
};
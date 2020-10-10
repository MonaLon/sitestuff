import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import { NaviBar } from './components/NaviBar';
import backgroundContact from './assets/backgroundContact.jpg';
import { Layout } from './components/Layout';
import Theme from './Theme';
import { TextBlock } from './components/TextBlock';

const Background = styled.div`
        background-image: url(${backgroundContact});
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

export const Contact = () => {
    return (
        <Background>
            <Theme>
                <NaviBar></NaviBar>
                <div class = "container min-wh-100">
                    <div class = "row min-vh-100 justify-content-center align-items-center">
                        <Col>
                            <TextBlock>
                                <Layout>
                                    <Text>
                                        <h4>For professional, writing-related things, reach out to my agent Matt. Otherwise, send me an <a href = "mailto:kolaheywardrotimi@gmail.com">email</a> or DM me on <a href = "www.twitter.com/KolaHR">Twitter</a>.</h4>
                                    </Text>
                                </Layout>
                            </TextBlock>
                        </Col>
                    </div>
                </div>
            </Theme>
        </Background>
    );
};
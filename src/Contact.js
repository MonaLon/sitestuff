import React from 'react';
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

export const Contact = () => {
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
                                        <h4>For professional, writing-related things, reach out to my agent <a href="mailto:matt@thetobiasagency.com">Matt</a>. Otherwise, send me an <a href = "mailto:kolaheywardrotimi@gmail.com">email</a> or DM me on <a href = "https://www.twitter.com/KolaHR" target="_blank" rel="noopener noreferrer">Twitter</a>.</h4>
                                    </Text>
                                </Layout>
                            </TextBlock>
                    </div>
                </div>
            </Theme>
        </Background>
    );
};
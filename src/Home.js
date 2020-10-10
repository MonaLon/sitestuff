import React from 'react';
import styled from 'styled-components';
import { NaviBar } from './components/NaviBar';
import backgroundHome from './assets/backgroundHome.jpg';

const Background = styled.div`
        background-image: url(${backgroundHome});
        width: 100vw;
        height: 100vh;
        background-size: cover;
        position: center;
        background-repeat: no-repeat
`;

export const Home = () => {
    return (
        <Background>
            <NaviBar></NaviBar>
        </Background>
    );
};
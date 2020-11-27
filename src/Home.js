import React from 'react';
import styled from 'styled-components';
import { NaviBar } from './components/NaviBar';
import backgroundHome from './assets/backgroundHome.jpg';

const Background = styled.div`
        background-image: url(${backgroundHome});
        width: 100vw;
        height: 100vh;
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        overflow: auto;
        background-repeat: no-repeat
`;

export const Home = () => {
    return (
        <Background>
            <div class = "container-fluid" style={{height: "100vh"}}>
                <div class = "row-fluid">
                    <NaviBar></NaviBar>
                </div>
            </div>
        </Background>
    );
};
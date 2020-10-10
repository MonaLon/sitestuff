import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: transparent;
    }

    .navbar-brand {
        text-indent: 5%;
    }

    a {
        color: white;
    }

    .navbar-brand, .navbar-nav, .nav-link {
        font-family: "Times New Roman", Times, serif;
        font-size: 32px;
        color: white;

        &:hover {
            color: gray;
        }
    }`;

export const NaviBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">kola heyward-rotimi</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href ="/about">about</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href ="/work">work</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href ="/contact">contact</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href ="/cv">cv</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)
import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    color: {
        white: 'white',
        gray: 'gray',
        black: 'black'
    },
    font: ['Helvetica'],
    fontSize: {
        small: '64px',
        medium: '64px',
        large: '64px'
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme = {theme}>{children}</ThemeProvider>
)

export default Theme;
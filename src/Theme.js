import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    color: {
        white: 'white',
        gray: 'gray'
    },
    font: ['Times New Roman'],
    fontSizes: {
        small: '16px',
        medium: '14px',
        large: '12px'
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme = {theme}>{children}</ThemeProvider>
)

export default Theme;
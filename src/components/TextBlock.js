import React from 'react';
import styled from 'styled-components';

const Blocker = styled.div`
    border: 1px solid white;
    padding: 0;
`;

export const TextBlock = (props) => (
    <Blocker>
        {props.children}
    </Blocker>
)
/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */
/* eslint-disable padded-blocks */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable space-before-function-paren */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable import/order */

import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled, { css } from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingAll }) => css`
    padding: ${paddingAll};
    `}
`;

function PageDefault ({children, paddingAll}){
    return (
        <>
        <Menu/>
             <Main paddingAll={paddingAll}>
            {children}
            </Main>
        <Footer/>
        </>

    );

}

export default PageDefault;
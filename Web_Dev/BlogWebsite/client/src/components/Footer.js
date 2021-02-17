import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return(
        <FooterContainer className = ' text-center text-black p-3 mt-4 '>
            <div>&copy;Copyright, Blogpost.Pvt.Ltd</div>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
    font-family: 'Sora', sans-serif;
    background: #fdc029;
    height: 3rem;
    positon:absolute;
    bottom:0;
`
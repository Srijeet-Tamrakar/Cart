import React from 'react';
import styled from 'styled-components'

const Header = () => {
    return(
        <MainContainer className='text-center text-white'>
            <h1 className='pt-3'> BLOGPOST </h1>
        </MainContainer>
    )
}

export default Header;

const MainContainer = styled.header`
    background-color: #020202;
    height: 5rem;
    font-family: 'Nosifer', cursive; 
    `
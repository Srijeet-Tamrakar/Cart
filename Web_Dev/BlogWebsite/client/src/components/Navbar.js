import React from 'react';
import {Link } from 'react-router-dom'
import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'

const NavBar = () => {
    return(
        <NavbarContainer>
            <Navbar expand="lg">
                <Link to="/"><img src='../../logo192.png' alt='Loading...' className = "ml-2 links" style={{width:'30px'}}/>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse >
                    <Nav className="ml-auto ">
                        <Link to="/" className='p-3 links text-lg'>Home</Link>
                        <Link to="/addblog" className='p-3 links'>Add Blog
                        </Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>   
        </NavbarContainer>
    )
}

export default NavBar

const NavbarContainer = styled.div`
    background: #020202;
   
    .links{
        color:#fdc029;
        &:hover{
            
            color:white;
            text-decoration:none;
            transform: scale(1.2);
        }
    }
  
    font-family: 'Concert One', cursive;
`
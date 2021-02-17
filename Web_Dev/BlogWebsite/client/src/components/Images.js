import React from 'react';
import {Carousel} from 'react-bootstrap'
import styled from 'styled-components'

const Images = () => {
    return(
    <ImageContainer>
    <Carousel interval={4000}>
    <Carousel.Item >
    <img
        className="d-block w-100"
        src="../../Typography.jpg"
        alt="First slide"
    />
    <Carousel.Caption className='text-black'>
        <h4>Love Never Dies</h4>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item >
        <img
            className="d-block w-100"
            src="../../Sillhoutte-01.jpg"
            alt="Second slide"
        />
            <Carousel.Caption>
                <h4>Sweet Sillhoutte</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100 "
                src="../../Dark-Batman-Logo-HD-Wallpapers.jpg"
                alt="Third slide"
            />
            <Carousel.Caption>
                <h4>I AM BATMAN</h4>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </ImageContainer>
    )
    
}

export default Images

const ImageContainer = styled.div`
    img{
        height:500px;
        opacity:0.8;
        
        &:hover{
            opacity:1;
        }
    }
`

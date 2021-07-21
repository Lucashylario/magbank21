import React from 'react';
import { Row, Col, Jumbotron, Button, Image, Container } from 'react-bootstrap';
import logo from '../assets/images/magic-pay-logo-mobile.png';
import logoDesktop from '../assets/images/magic-pay-logo.png';
import './Hero.scss';

const Hero = () => (
    <Jumbotron className='text-light hero'>
        <Container>
            <Row>
                <Col lg className='text-lg-right'>
                    <Image className='d-lg-none magic-logo-mobile' src={logo} /> 
                    <Image className='d-none d-lg-inline-block content-hero magic-logo-desktop' src={logoDesktop} />
                </Col>
                <Col lg className='text-lg-left'>
                    <p className='content-hero text-hero'>Pague suas constas pelo nosso APP.</p>
                    <Button variant='outline-light button-hero'>Abra sua conta</Button>
                </Col>
            </Row>
        </Container>
    </Jumbotron>
);

export default Hero;

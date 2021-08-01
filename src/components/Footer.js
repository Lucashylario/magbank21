import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/images/footer-logo.png';
import appStore from '../assets/images/appStore.png';
import googlePlay from '../assets/images/googlePlay.png';

const Footer = () => (
    <footer>
        <Container>
            <Row>
                <Col xs={12} lg={6}>
                    <Image src={logo} />
                </Col>
                <Col xs={12} lg={4}>
                    <Image src={appStore} />
                    <Image src={googlePlay} />
                </Col>
                <Col xs={12} lg={2}>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faYoutube} />
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;
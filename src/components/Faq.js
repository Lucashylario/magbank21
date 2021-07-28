import React, { useState } from 'react';
import { Container, Row, Col, Card, Accordion, Button } from 'react-bootstrap';
import IconText from './IconText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faWallet, faShieldAlt, faUserTie } from '@fortawesome/free-solid-svg-icons';
import './Faq.scss';

const Faq = () => {
    const options = [
        {icon: faCreditCard, text: 'Cartão de crédito'},
        {icon: faWallet, text: 'Conta e abertura'},
        {icon: faShieldAlt, text: 'Token digital'},
        {icon: faUserTie, text: 'Produtos e serviços'},
    ];
    
    return (
    <section className='faq text-light'>
        <Container className='py-5'>
            <Row className='text-center'>
                <h2 className='faq-title my-5'>Dúvidas frequentes</h2>
            </Row>
                    
            <Row className='d-flex align-items-center justify-items-center'>
                <Col className='d-lg-none mb-5' xs={12}>
                    <Row>
                        {options.map(({ icon }) => (
                            <Col className='d-flex justify-content-center'>
                                <FontAwesomeIcon icon={icon} size='2x' color='#fff'/>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col className='d-none d-lg-block'>
                    {options.map(({ icon, text }) => (
                        <IconText icon={icon} size={3} className='mb-3' textClassName='lead' color='#fff'>{text}</IconText>
                    ))}
                </Col>
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                                    Lorem ipsum dolor sit amet
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel 
                                    arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, 
                                    auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. 
                                    Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. 
                                    Proin purus ante, congue vel arcu ac, porta condimentum mauris. 
                                    Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.  
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                                    Nulla porttitor eros ac ex tristique posuere
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.  
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant='link' eventKey='2'>
                                    Quisque fringilla tincidunt arcu
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.  
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant='link' eventKey='3'>
                                    Nam elementum lobortis purus a maximus tortor
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.  
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        
                    </Accordion>
                </Col>
            </Row>
        </Container>
    </section>
)
};

export default Faq;
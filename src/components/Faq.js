import React, { useState } from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import IconText from './IconText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faWallet, faShieldAlt, faUserTie } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Faq.scss';

const Faq = () => {
    const options = [
        {icon: faCreditCard, text: 'Cartão de crédito'},
        {icon: faWallet, text: 'Conta e abertura'},
        {icon: faShieldAlt, text: 'Token digital'},
        {icon: faUserTie, text: 'Produtos e serviços'},
    ];

    const [index, setIndex] = useState(0);

    const handleClick = (key) => {
        setIndex(key);
    };
    
    return (
        <section className='faq text-light' id="faq">
            <Container className='py-5'>
                <Row className='text-center'>
                    <h2 className='faq-title my-5'>Dúvidas frequentes</h2>
                </Row>
                        
                <Row className='d-flex align-items-center justify-items-center'>

                    <Col className='d-lg-none mb-5' xs={12}>
                        <Row>
                            {options.map(({ icon }, key) => (
                                <Col className='d-flex justify-content-center' key={key}>
                                    <FontAwesomeIcon 
                                        icon={icon} 
                                        size='2x' 
                                        color={key === index ? '#fff' : '#fff'} 
                                        onClick={() => handleClick(key)}
                                    />
                                </Col>
                            ))}
                            <Row className='text-center mt-5'>
                                <p className='lead'>
                                    {options[index].text}
                                </p>
                            </Row>
                        </Row>
                    </Col>

                    <Col className='d-none d-lg-block'>
                        {options.map(({ icon, text }, key) => (     
                            /*<Col className='d-flex justify-content-center' key={key}>
                            <FontAwesomeIcon 
                                icon={icon} 
                                size='3x' 
                                className='faq-clickable mb-3' 
                                textClassName='lead' 
                                color={key === index ? '#fff' : '#BBB'} 
                                onClick={() => handleClick(key)} 
                                key={key}
                                text={text}
                            >
                                {text}
                            </FontAwesomeIcon> 
                            </Col>    */               
                            <IconText
                                icon={icon} 
                                size={3} 
                                className='faq-clickable mb-3' 
                                textClassName='lead' 
                                color={key === index ? '#fff' : '#fff'} 
                                onClick={() => handleClick(key)} 
                                key={key}
                            >
                                {text}
                            </IconText>
                        ))}
                    </Col>

                    <Col>
                        <Accordion defaultActiveKey='0'>
                            <Card>
                                <Accordion.Toggle className='py-3 faq-clickable' as={Card.Header} eventKey='0'>
                                    Cartão de crédito
                                </Accordion.Toggle>

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
                                <Accordion.Toggle className='py-3 faq-clickable' as={Card.Header} eventKey='1'>
                                    Conta e abertura
                                </Accordion.Toggle>
                                
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
                                <Accordion.Toggle className='py-3 faq-clickable' as={Card.Header} eventKey='2'>
                                    Token digital
                                </Accordion.Toggle>
                                
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
                                <Accordion.Toggle className='py-3 faq-clickable' as={Card.Header} eventKey='3'>
                                    Produtos e serviços
                                </Accordion.Toggle>
                                
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
)};

export default Faq;
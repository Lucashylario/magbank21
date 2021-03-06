import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import IconText from './IconText';
import './Institutional.scss';
import { faGlobe, faMobile, faMobileAlt, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const Institutional = () => (
    <section className='institutional text-light py-5' id="quemsomos">
        <Container>
            <Row>
                <Col xs={12} lg={5}></Col>
                <Col xs={12} lg={7}>
                    <h2 className='institutional-title my-5'>Já nascemos digital</h2>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                    </p>         
                    <IconText icon={faMobileAlt} color='#fff' className='mb-3'>
                        Sem fila e sem burocracia
                    </IconText>

                    <IconText icon={faMobile} color='#fff' className='mb-3'>
                        Simples e prático
                    </IconText>

                    <IconText icon={faGlobe} color='#fff' className='mb-3'>
                        Abertura de conta 100% online
                    </IconText>

                    <IconText icon={faShieldAlt} color='#fff' className='mb-0'>
                        Transações mais seguras
                    </IconText>
                    <Button variant='outline-light' className='mt-5'>Abra sua conta</Button>
                </Col>            
            </Row>
        </Container>
    </section>
);

export default Institutional;
import React from "react";
import { Container, Row, Col, Button, Tabs, Tab, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import './Dashboard.scss';

const Dashboard = ({ className = false}) => {
    const latest = [
        {date: '22/07', description: 'SAQUE 24h 012345', value: '300,00' },
        {date: '21/07', description: 'SUPERMERCADO 023456', value: '275,00' },
        {date: '20/07', description: 'NETFLIX 253483', value: '30,00' },
        {date: '15/07', description: 'FARMÁCIA 12125', value: '350,00' },
        {date: '16/07', description: 'CINEMA 15625', value: '60,00' },
    ];

    const future = [
        {date: '22/08', description: 'SALÁRIO 012345', value: '3000,00' },
        {date: '20/08', description: 'IMAGINE 253483', value: '30,00' },
        {date: '15/08', description: 'FARMÁCIA 12125', value: '35,00' },
        {date: '16/08', description: 'SUPERMERCADO 023456', value: '275,00' },
    ]

    return (
    <Container className={`dashboard py-5 ${className ? className : ''}`}>
        <Row>
            <Col xs={12} lg={4}>
                <Row className='align-items-center mb-5'>
                    <Col xs={3}>
                        <span className='dashboard__user-avatar'>
                            <FontAwesomeIcon icon={faCircle} size='5x' color='#f8f9fa' />
                            <FontAwesomeIcon className='dashboard__user-icon' icon={faUser} size='3x' color='#7c7d7d' />
                        </span>
                    </Col>

                    <Col xs={9}>
                        <h3>Lucas Hylario</h3>
                        <p className='text-muted'>ag: 1234 c/c: 4321-5</p>
                    </Col>
                </Row>
                <div className="d-grid gap-2 ">
                    <Button className='dashboard__button dashboard__button--active text-start ms-4' variant='link' size='lg'>Minha Conta</Button>
                    <Button className='dashboard__button text-start ms-4' variant='link' size='lg'>Pagamentos</Button>
                    <Button className='dashboard__button text-start ms-4' variant='link' size='lg'>Extrato</Button>
                </div>
            </Col>

            <Col xs={12} lg={3} className='mt-lg-5 pt-lg-4 ms-4 ms-lg-0'>
                <h3 className='my-5'>Conta Corrente</h3>
                <h6>
                    <small>
                        <strong>Saldo em conta corrente</strong>
                    </small>
                </h6>
                <h4 className='text-success mb-4'>
                    <small>R$</small>3.500<small>,00</small>
                </h4>
                <h6>
                    <small>
                        <b>
                            Cheque especial
                        </b>
                    </small>
                </h6>
                <p className='mb-0'>Limite disponível</p>
                <p className='mb-4'>R$ 5.000,00</p>
                <Button variant='secondary'>Ver extrato</Button>
            </Col>

            <Col xs={12} lg={5} className='mt-lg-5 pt-lg-5'>
                <Tabs className='mt-5 pt-lg-5' defaultActiveKey='latest'>
                    <Tab eventKey='latest' title='Últimos Lançamentos'>
                        <Table striped borderless> 
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {latest.map(({ date, description, value }) => (
                                    <tr>
                                        <td>{date}</td>
                                        <td>{description}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))}                                
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey='future' title='Lançamentos Futuros'>
                        <Table striped borderless> 
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {future.map(({ date, description, value }) => (
                                    <tr>
                                        <td>{date}</td>
                                        <td>{description}</td>
                                        <td>{value}</td>
                                    </tr>
                                ))}                                
                            </tbody>
                        </Table> 
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    </Container>
)};

export default Dashboard;
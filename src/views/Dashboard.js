import React from "react";
import { Switch, Route,  } from "react-router";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import AccountBalance from "../components/AccountBalance";

import './Dashboard.scss';
import { Link } from "react-router-dom";

const Dashboard = ({ className = false}) => {
    const data = {
        latestBalance: [
        {date: '22/07', description: 'SAQUE 24h 012345', value: '300,00' },
        {date: '21/07', description: 'SUPERMERCADO 023456', value: '275,00' },
        {date: '20/07', description: 'NETFLIX 253483', value: '30,00' },
        {date: '15/07', description: 'FARMÁCIA 12125', value: '350,00' },
        {date: '16/07', description: 'CINEMA 15625', value: '60,00' },
    ],
    futureBalance: [
        {date: '22/08', description: 'SALÁRIO 012345', value: '3000,00' },
        {date: '20/08', description: 'IMAGINE 253483', value: '30,00' },
        {date: '15/08', description: 'FARMÁCIA 12125', value: '35,00' },
        {date: '16/08', description: 'SUPERMERCADO 023456', value: '275,00' },
    ],
    };

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
                    <Link className='link-btn' to='/dashboard'>
                        <Button className='dashboard__button dashboard__button--active text-start ms-4' variant='link' size='lg'>Minha Conta</Button>
                    </Link>

                    <Link className='link-btn' to='/dashboard/payments'>
                        <Button className='dashboard__button text-start ms-4' variant='link' size='lg'>Pagamentos</Button>
                    </Link>

                    <Link className='link-btn' to='/dashboard/history'>
                        <Button className='dashboard__button text-start ms-4' variant='link' size='lg'>Extrato</Button>
                    </Link>
                </div>
            </Col>
            
            <Switch>
                <Route path='/dashboard/history'>
                    <h2>Extrato</h2>
                </Route>
                <Route path='/dashboard/payments'>
                    <h2>Pagamentos</h2>
                </Route>
                <Route path='/dashboard'>
                    <AccountBalance data={data} />
                </Route>
            </Switch>
        </Row>
    </Container>
)};

export default Dashboard;
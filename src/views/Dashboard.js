import React, { useState } from "react";
import { Switch, Route,  } from "react-router";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import AccountBalance from "../components/AccountBalance";
import AccountPayments from "../components/AccountPayments";
import AccountHistory from "../components/AccountHistory";

import './Dashboard.scss';
import { Link } from "react-router-dom";

const Dashboard = ({ className = false}) => {
    const [ activeLink, setActiveLink ] = useState(0); 

    const links = [
        { text: 'Minha Conta', path: '/dashboard', exact: true },
        { text: 'Pagamentos', path: '/dashboard/payments' },
        { text: 'Extrato', path: '/dashboard/history' },
    ];

    const data = {
        latestBalance: [
        {date: '17/07', description: 'SAQUE 24h 012345', value: '300,00' },
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
    history: [
        {date: '17/07', description: 'SAQUE 24h 012345', value: '200,00-', balance: ''},
        {date: '17/07', description: 'SALDO DO DIA', value: '', balance: '2.780,00'},
        {date: '19/07', description: 'ESTACIONAMENTO 123234', value: '12,00-', balance: ''},
        {date: '19/07', description: 'COMPRA INTERNET 123432', value: '250,00-', balance: ''},
        {date: '19/07', description: 'SALDO DO DIA', value: '', balance: '2.318,00'},
        {date: '21/07', description: 'SUPERMERCADO 3212332', value: '180,00-', balance: ''},
        {date: '21/07', description: 'SHOPPING 123432', value: '100,00', balance: ''},
        {date: '21/07', description: 'DEPÓSITO 123234', value: '1000,00', balance: ''},
        {date: '22/07', description: 'SALDO DO DIA', value: '', balance: '2.576,00'},
    ]
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
                {links.map(({ text, path, exact }, key) => (
                    <Link className='link-btn' to={path} exact={exact ? exact : false } key={key}>
                        <Button className={`dashboard__button text-start ${key === activeLink ? 'dashboard__button--active' : ''}`} variant='link' size='lg' block onClick={() => setActiveLink(key)}>{text}</Button>
                    </Link>
                ))}
            </Col>
            
            <Switch>
                <Route path='/dashboard/history'>
                    <AccountHistory data={data} />
                </Route>
                <Route path='/dashboard/payments'>
                    <AccountPayments />
                </Route>
                <Route path='/dashboard'>
                    <AccountBalance data={data} />
                </Route>
            </Switch>
        </Row>
    </Container>
)};

export default Dashboard;
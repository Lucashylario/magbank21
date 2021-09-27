import React from "react";
import { Col, Row, Button, Tabs, Tab, Form } from "react-bootstrap";

const AccountPayments = () => (
    <>
            <Col xs={12} lg={8} className='mt-lg-5 pt-lg-5'>
                <h3 className='mt-4'>Pagamentos</h3>
                <Tabs className='mt-5 pt-lg-2' defaultActiveKey='boleto'>
                    <Tab eventKey='boleto' title='Boleto'>
                        <Form>
                            <Form.Group controlId='formBarCode' className='my-5'>
                                <Form.Label>Código de barras</Form.Label>
                                <Form.Control type='number' placeholder='Insira o código de barras' />
                            </Form.Group>
                            <Form.Group controlId='fromPaymentType' className='mb-5'>
                                <Form.Label>Forma de Pagamento</Form.Label>
                                <div className='d-flex'>
                                    <Form.Check type='radio' id='debit' label='Débito em Conta Corrente' name='paymentType' />
                                    <Form.Check type='radio' id='credit' label='Cartão de Crédito' className='ms-4' name='paymentType' />
                                </div>
                            </Form.Group>
                            <Button variant='success'>Continuar</Button>
                        </Form>
                    </Tab>
                    <Tab eventKey='transfer' title='Transferência'>
                        <Form className="ms-lg-4">
                            <Row className='mt-4'>
                                <Col>
                                    <Form.Label className="mt-4 mt-lg-0"><b>Banco</b></Form.Label>
                                    <Form.Control type="number" />
                                </Col>
                                <Col>
                                    <Form.Label className="mt-4 mt-lg-0"><b>Agência</b></Form.Label>
                                    <Form.Control type="number" />
                                </Col>
                                <Col>
                                    <Form.Label><b>Conta corrente</b></Form.Label>
                                    <Form.Control type="number" />
                                </Col>
                            </Row>
                            <Row className='mt-4'>
                                <Col>
                                    <Form.Label className="mt-4 mt-lg-0"><b>Valor da tranferência</b></Form.Label>
                                    <Form.Control type="number" />
                                </Col>
                                <Col>
                                    <Form.Label><b>Identificação nos extratos</b></Form.Label>
                                    <Form.Control />
                                </Col>
                            </Row>
                            <Button className='mt-4' variant='success'>Continuar</Button>
                        </Form>
                    </Tab>
                </Tabs>
            </Col>            
    </>
);

export default AccountPayments;

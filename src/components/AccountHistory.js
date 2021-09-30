import React from "react";
import { Col, Table } from 'react-bootstrap';

const AccountHistory = ({ data }) => {
    const { history } = data;

    return (
        <Col xs={12} lg={8} className='mt-lg-5 pt-lg-5'>
            <h3 className='mt-5 mb-3'><b>Extrato de conta corrente</b></h3>
            <Table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Valor (R$)</th>
                        <th>Saldo (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map(({ date, description, value, balance }) => (
                        <tr>
                            <td>{date}</td>
                            <td>{description}</td>
                            <td>{value}</td>
                            <td>{balance}</td>
                        </tr>
                    ))}                                
                </tbody>  
            </Table>        
        </Col>
    )
};

export default AccountHistory;
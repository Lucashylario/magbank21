import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import './CenteredButton.scss';

const CenteredButton = ({ children }) => (
    <Container>
        <Row className='d-flex justify-content-center button-center'>
            <Button className='my-5 px-5 py-3 button-center' variant='success' size='lg'>
                {children}
            </Button>
        </Row>
    </Container>
);

export default CenteredButton;
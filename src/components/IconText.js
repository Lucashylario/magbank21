import React from  'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const IconText = ({ icon, size = 1, color = '#000', className = '', children, }) => (
    <Row>
        <Col xs={typeof size == Number ? `${size}x` : size} className='d-flex justify-content-center'>
            <FontAwesomeIcon 
                icon={icon}
                size={size}
                color={color}
            />
        </Col>
        <Col xs={12 - size} className={className}>
            { children }
        </Col>
    </Row>
);

export default IconText;
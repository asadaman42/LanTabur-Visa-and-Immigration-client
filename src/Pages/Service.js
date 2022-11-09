import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const {_id, name, description, price, imgURL} = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={imgURL} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 110) + '...'}
                    </Card.Text>
                    <Link to={`/services/${_id}`}>
                        <Button variant="primary" className='w-100'>Coures Details</Button>
                    </Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, serviceName, description, price, imgURL } = service;
    return (

        <Col>
            <Card className='text-center'>
                
                <PhotoProvider><PhotoView><Card.Img variant="top" src={imgURL} /></PhotoView></PhotoProvider>
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 110) + '...'}
                    </Card.Text>
                    <Link to={`/services/${_id}`}>
                        <Button variant="primary" className='w-100'>Service Details</Button>
                    </Link>

                </Card.Body>
            </Card>
        </Col>
    );
};



export default Service;
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Figure, Image, Row } from 'react-bootstrap';


import { useLoaderData } from 'react-router-dom';





const ViewDetails = () => {
    const details = useLoaderData();
    const { _id, serviceName, description, imgURL, price } = details;

    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch(`https://11th-assignment-08-11-22-server-asadaman42.vercel.app/review/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [_id]);








    return (
        <Container className='text-center mx-5 my-5'>
            <Card className='h-50'>
                <Card.Header as="h3">{serviceName} </Card.Header>
                <Card.Img variant="top" src={imgURL} className='w-50 mx-auto' />

                <Card.Body>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Title> Get the service for only {price}</Card.Title>
                </Card.Body>
            </Card>

            {
                reviews?.map(review =>
                    <Row className='border border-danger m-2'>
                        <Col xs={3} md={2} lg={1}>
                            <Row>
                                <Col xs={{ span: 9, offset: 2 }} >
                                    <Image fluid roundedCircle src={review.userImage} />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={9} md={10} lg={11} className='text-start mt-4'>
                            <h4>{review.userName}</h4>
                            <p>{review.text}</p>
                        </Col>
                    </Row>                   
                )
            }
        </Container>
    );
};

export default ViewDetails;
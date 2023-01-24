import { Helmet } from 'react-helmet-async'; import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Figure, Form, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


import { useLoaderData } from 'react-router-dom';
import { UniversalContext } from '../ContexSupplier/ContexSupplier';





const ViewDetails = () => {
    const { user } = useContext(UniversalContext);
    const [enable, setEnable] = useState(false);
    const details = useLoaderData();
    const { _id, serviceName, description, imgURL, price } = details;
    const [reviews, setReviews] = useState();

    useEffect(() => {
        fetch(`https://lantabur-visa-and-immigration-server-asadaman42.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [_id]);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {

        const reviewData = {
            serviceID: _id,
            userID: user?.uid,
            text: data?.review,
            userName: user?.displayName,
            userImage: user?.photoURL,
            userEmail: user?.email,
            serviceName
        }

        fetch('https://lantabur-visa-and-immigration-server-asadaman42.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('review added successfully')
                    const updatedReviews = [...reviews, reviewData];
                    setReviews(updatedReviews);
                    e.target.reset();
                }
            })
            .catch(err => console.error(err));

    };

    const checkInput = (event) => {
        const value = event.target.value;
        if (value.length > 1) {
            setEnable(true);
        }
        else {
            setEnable(false);
        }
    }

    return (
        <Container>
            <Helmet>
                <title>{serviceName}</title>
            </Helmet>
            
            <Container className='m-2 p-2'>
                <Card className='bg-secondary bg-opacity-25'>
                    <Card.Header as="h3">{serviceName} </Card.Header>
                    <Card.Img variant="top" src={imgURL} className='w-50 mx-auto' />

                    <Card.Body>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Title> Get the service for only {price}</Card.Title>
                    </Card.Body>
                </Card>
            </Container>

            <Container className='m-3 p-2 bg-secondary bg-opacity-25'>
                {
                    user?.uid ?
                        <>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Control onKeyUp={checkInput} autoComplete='review' type='text' placeholder='Review here...' {...register("review")} />

                                </Form.Group>
                                <span className='m-2'>Reviewing as {user?.displayName}</span>
                                <Button disabled={!enable} variant="primary" type="submit" className="mb-3">
                                    Review
                                </Button>
                            </Form>
                        </>
                        :
                        <>
                            <p>Please <Link to='/login'> <Button className='m-1'>Log In</Button></Link> to add a review, or <Link to='/register'> <Button className='m-1'> Register </Button> </Link></p>



                        </>

                }
            </Container>

            <Container className='m-3 p-2 bg-secondary bg-opacity-25'>
                {
                    reviews?.map(review =>
                        <Row key={review._id} className='bg-primary bg-opacity-25 m-2'>
                            <Col xs={3} md={2} lg={1}>
                                <Row>
                                    <Col xs={{ span: 9, offset: 2 }} >
                                        <Image className='my-3' fluid roundedCircle src={review.userImage} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={9} md={10} lg={11} className='mt-4'>
                                <h4>{review.userName}</h4>
                                <p>{review.text}</p>
                            </Col>
                        </Row>
                    )
                }
            </Container>


        </Container>
    );
};

export default ViewDetails;
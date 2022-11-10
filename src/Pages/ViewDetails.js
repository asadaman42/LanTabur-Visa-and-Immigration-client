import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';




const ViewDetails = () => {
    const details = useLoaderData();
    const { _id, serviceName, description, imgURL, price } = details;
    const [reviews, setReviews] = useState();


    useEffect(() => {
        fetch(`http://localhost:5000/review/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [_id]);


    return (
        <div className='text-center mx-5 my-5'>

            <Card className='h-50'>

                <Card.Header as="h3">{serviceName} </Card.Header>
                <Card.Img variant="top" src={imgURL} className='w-50 mx-auto' />

                <Card.Body>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Title> Get the service for only {price}</Card.Title>
                    <Link to={`/checkout/${_id}`}>
                        <Button variant="primary" className='w-100'>Get premium access</Button>
                    </Link>

                </Card.Body>

            </Card>

            {
                reviews.map(review => <Card className='h-50' key={review._id}>

                    <Card.Header as="h3">{review.userName} </Card.Header>
                    <Card.Img variant="top" src={review.userImage} className='w-50 mx-auto' />

                    <Card.Body>
                        <Card.Text>
                            {review.text}
                        </Card.Text>
                        <Card.Title> Get the service for only {price}</Card.Title>
                        <Link to={`/checkout/${_id}`}>
                            <Button variant="primary" className='w-100'>Get premium access</Button>
                        </Link>

                    </Card.Body>

                </Card>)

            }
        </div>
    );
};

export default ViewDetails;
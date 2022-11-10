import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const MyReviews = () => {        
    const [myReviews, setMyReviews] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setMyReviews(data);
            })
    }, [user?.email, logOut])

    setMyReviews(loaderData);
    const deleteFromDB = id => {
        const proceed = window.confirm('Do you really want to remove your review?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',                
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myReviews.filter(review => review._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }
    return (
        <Container className='my-4 py-2 bg-secondary bg-opacity-25'>
            {
                myReviews?.map(review =>
                    <Row key={review._id} className='bg-primary bg-opacity-25 mx-2 my-3'>
                        <Col xs={3} md={2} lg={1} className='my-auto'>
                            <Row>
                                <Col xs={{ span: 9, offset: 2 }} >
                                    <Image  fluid roundedCircle src={review.userImage} />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={7} md={8} lg={9} className='mt-4'>
                            <h4>{review.userName}</h4>
                            <p>{review.text}</p>
                        </Col>
                        <Col xs={1} md={1} lg={1} className='text-center my-auto'> <AiFillEdit/>  </Col>
                        <Col xs={1} md={1} lg={1} className='text-center my-auto'> <AiFillDelete onClick={() => deleteFromDB(review._id)}/>  </Col>
                    </Row>
                )
            }
        </Container>
    );
};

export default MyReviews;
import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { UniversalContext } from '../ContexSupplier/ContexSupplier';


const MyReviews = () => {
    const { user } = useContext(UniversalContext);
    const [myReviews, setMyReviews] = useState();

    useEffect(() => {
        fetch(`https://11th-assignment-08-11-22-server-asadaman42.vercel.app/myreviews/${user?.uid}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.uid]);


    const deleteFromDB = id => {
        const proceed = window.confirm('Do you really want to remove your review?');
        if (proceed) {
            fetch(`https://11th-assignment-08-11-22-server-asadaman42.vercel.app/reviews/${id}`, {
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
                                    <Image fluid roundedCircle src={review.userImage} />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={7} md={8} lg={9} className='mt-4'>
                            <h4>{review.userName}</h4>
                            <p>{review.text}</p>
                        </Col>
                        <Col xs={1} md={1} lg={1} className='text-center my-auto'>
                            <Link to={`/editreview/${review._id}`}>
                                <AiFillEdit/>
                            </Link>
                        </Col>
                        <Col xs={1} md={1} lg={1} className='text-center my-auto'> <AiFillDelete onClick={() => deleteFromDB(review._id)} />  </Col>
                    </Row>
                )
            }
        </Container>
    );
};

export default MyReviews;
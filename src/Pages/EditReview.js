import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

const EditReview = () => {

    const toBeEdited = useLoaderData();
    const { _id, text } = toBeEdited;

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        fetch(`https://11th-assignment-08-11-22-server-asadaman42.vercel.app/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('updated. Please Reload')
                }
            })

    }




    return (
        <Container className="my-5 py-5 bg-secondary bg-opacity-25 text-center">
            
            <Helmet>
                <title>Edit Review</title>
            </Helmet>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Control autoComplete='review' defaultValue={text} type='text' placeholder='Review here...' {...register("review")} />
                </Form.Group>

                <Button variant="primary" type="submit" className="mb-3">
                    Update Review
                </Button>
            </Form>
        </Container>
    );
};

export default EditReview;
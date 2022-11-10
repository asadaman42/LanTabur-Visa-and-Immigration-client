import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddService = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {

        const {serviceName, description, price, imgURL} = data;

        const newService = {
            serviceName,
            description, 
            price,
            imgURL
        }

        fetch('https://11th-assignment-08-11-22-server-asadaman42.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Service added successfully')                    
                    e.target.reset();
                }
            })
            .catch(err => console.error(err));

    };


    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control autoComplete='username' type='text' placeholder='Your Full Name' {...register("serviceName", { required: true })} />
                    <Form.Text className="text-muted">
                        Write Service Name.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control autoComplete='description' type="text" placeholder="Enter details about the service" {...register("description", { required: true })} />
                    <Form.Text className="text-muted">
                        Provide details of mentioned service.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price of Service</Form.Label>
                    <Form.Control type="text" placeholder='Your Photo URL' {...register("price")} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="photoURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder='Your Photo URL' {...register("imgURL")} />
                </Form.Group>              

                <Button variant="primary" type="submit" className="mb-3">
                    Register
                </Button>            
            </Form> 
        </div>
    );
};

export default AddService;
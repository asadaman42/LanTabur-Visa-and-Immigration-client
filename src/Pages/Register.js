import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom';
import { UniversalContext } from '../ContexSupplier/ContexSupplier';


const Register = () => {
    const { createUserByEmailAndPassword, updatePhotoAndName, emailVerify } = useContext(UniversalContext);
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState('');
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const { name, email, PhotoURL, password } = data;
        createUserByEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                e.target.reset();
                setError('');
                handleEmailVerify();
                handleUpdatePhotoAndName(name, PhotoURL);
                toast.success('verification mail sent to your email address');
                <Navigate to = '/login'></Navigate>
            })

            .catch(error => {
                console.error(error)
                setError(error.message);
            })
    };

    const handleEmailVerify = () => {
        emailVerify()
            .then(() => { })
            .catch(error => console.error(error));

    };


    const handleUpdatePhotoAndName = (name, PhotoURL) => {
        updatePhotoAndName({ displayName: name, PhotoURL: PhotoURL });
    };

    const checkedIt = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className='w-75 mx-auto mt-5'>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control autoComplete='username' type='text' placeholder='Your Full Name' {...register("name", { required: true })} />
                    <Form.Text className="text-muted">
                        Write your full name.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control autoComplete='email' type="email" placeholder="Enter email" {...register("email", { required: true })} />
                    <Form.Text className="text-muted">
                        Provide a valid e-mail address.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="photoURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder='Your Photo URL' {...register("PhotoURL")} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control autoComplete='new-password' type="password" placeholder="Password" {...register("password", { required: true, min: 6, max: 12 })} />
                    <Form.Text className="text-muted">
                        Use minimum one uppercase, lowercase & number.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={checkedIt}
                        type="checkbox"
                        label=" I accept mentioned terms and conditions." />
                </Form.Group>

                <Button disabled={!checked} variant="primary" type="submit" className="mb-3">
                    Register
                </Button>

                <Form.Group>
                    <Form.Text>
                        Already have an account? Please <Link to='/login'>Log in</Link>
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Text>
                        {error}
                    </Form.Text>
                </Form.Group>
            </Form>



        </div>

    );
};

export default Register;
import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UniversalContext } from '../ContexSupplier/ContexSupplier';

const LoginEmail = () => {
    const { emailLoginProvider, setLoading } = useContext(UniversalContext);
    const [error, setError] = useState('')
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {

        const { email, password } = data;

        emailLoginProvider(email, password)
            .then(result => {
                const user = result.user;
                e.target.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });                    
                }
                else {
                    toast.error('email not verified')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally( () => {
                setLoading(false);
                
            })
    }

    return (
        <div className='w-75 mx-auto mt-5'>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />
                    <Form.Text className="text-muted">
                        Provide a valid e-mail address.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password", { required: true, min: 6, max: 12 })} />
                    <Form.Text className="text-muted">
                        Use minimum one uppercase, lowercase & number.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" className="mb-3">
                    Sign In
                </Button>

                <Form.Group>
                    <Form.Text>
                        No account yet ? <Link to='/register'> Sign up</Link>
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

export default LoginEmail;
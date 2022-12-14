import React from 'react';
import { useContext } from 'react';

import { UniversalContext } from '../ContexSupplier/ContexSupplier';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { Image } from 'react-bootstrap';
import { HiOutlineUser } from "react-icons/hi";
import { Link, Navigate } from 'react-router-dom';




const Header = () => {
    const { user, logOut } = useContext(UniversalContext);

    const signOut = () => {
        <Navigate to='/'></Navigate>
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg='dark'
            variant='dark'
            className="text-light">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="">
                        <img
                            alt=""
                            src="https://i.ibb.co/b6Q6jwQ/undraw-Aircraft-re-m05i.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        LanTabur Visa and Immigration
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/services">
                            <Nav.Link href="">Services</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/blog">
                            <Nav.Link href="">Blog</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/">
                            <Nav.Link href="">FAQ</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        <LinkContainer to="/">
                            <Nav.Link className='my-auto' href="">
                                {
                                    user ?
                                        <Image style={{ height: '30px', width: '30px' }} roundedCircle src={user?.photoURL} referrerPolicy='no-referrer' /> :
                                        <HiOutlineUser />
                                }
                            </Nav.Link>
                        </LinkContainer>



                        <>
                            {
                                user?.uid ?
                                    <>
                                        <h4 className='my-auto'>{user?.displayName}</h4>

                                        <Link to={`/myreviews`}> <Button className="m-2"> My Reviews </Button></Link>
                                        <Link to='/addservice'> <Button className="m-2"> Add Service </Button></Link>
                                        <Button onClick={signOut} className="m-2"> Sign Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'> <Button className='m-1'>Log In</Button></Link>
                                        <Link to='/register'> <Button className='m-1'> Register </Button> </Link>
                                    </>

                            }
                        </>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
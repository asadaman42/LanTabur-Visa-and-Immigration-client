import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';


const Main = () => {
    return (
        <Row xs={1}>
            <Col className='sticky-top'>
                <Header></Header>                
            </Col>
            <Col className='position-sticky'>                
                <Outlet></Outlet>                
            </Col>
            <Col className='sticky-bottom'>                
                <Footer></Footer>
            </Col>

        </Row>
    );
};

export default Main;
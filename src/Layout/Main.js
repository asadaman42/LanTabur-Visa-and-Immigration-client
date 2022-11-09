import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import LeftSideNav from '../Components/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <Row className='mx-auto'>
                <Col md="3" className='d-none d-md-block'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col md="8" className='mx-3'>
                    <Outlet></Outlet>
                </Col>
            </Row>


        </div>
    );
};

export default Main;
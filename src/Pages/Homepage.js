import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import HomepageStatistics from './HomepageStatistics';
import HomepageCarousel from './HomepageCarousel';
import Service from './Service';
import {Helmet} from 'react-helmet-async';

const Homepage = () => {
    const services = useLoaderData();



    return (
        <div>
            
            <Helmet>
                <title>LanTabur Home Page</title>
            </Helmet>
            <HomepageCarousel></HomepageCarousel>

            <Container className="my-5 py-5 bg-secondary bg-opacity-25 text-center">
                <Row xs={1} md={2} lg={3} className="g-5">
                    {
                        services.map(service =>
                            <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                    }
                </Row>

                <Link to={`/services`}>
                    <Button variant="primary" className='w-50 mt-5'> All Services </Button>
                </Link>
            </Container>

            <Container className="my-5 py-5 bg-secondary bg-opacity-25 text-center">
                <HomepageStatistics></HomepageStatistics>
            </Container>




        </div >
    );
};

export default Homepage;
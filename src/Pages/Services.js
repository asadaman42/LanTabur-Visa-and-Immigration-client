import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const services = useLoaderData();


    return (
        <Container>

            <Helmet>
                <title>All Services</title>
            </Helmet>
            <h4 className='text-center my-5'>
                All {services.length} services.
            </h4>
            <Row xs={1} md={2} lg={3} className="g-5">
                {
                    services.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                        // id = {service._id}
                        // name={service.serviceName}
                        // description={service.description}
                        // price={service.price}
                        // imgURL={service.imgURL}
                        ></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;
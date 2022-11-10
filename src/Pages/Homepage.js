import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import HomepageCarousel from './HomepageCarousel';
import Service from './Service';

const Homepage = () => {
    const services = useLoaderData();



    return (
        <div>


            <HomepageCarousel></HomepageCarousel>

            <section className="my-5 py-5 bg-secondary bg-opacity-25 text-center">
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

                <Link to={`/services`}>
                    <Button variant="primary" className='w-50 mt-5'> Service Details</Button>
                </Link>
            </section>

            








        </div >
    );
};

export default Homepage;
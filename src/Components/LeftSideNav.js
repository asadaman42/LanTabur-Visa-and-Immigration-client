import React, { useState } from 'react';
import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://11th-assignment-08-11-22-server-asadaman42.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);


    return (
        <div className='mx-4 my-4'>
            <h4> {services.length} Services: </h4>
            <ListGroup>
                {
                    services.map(
                        service =>
                            <Link to={`/services/${service.id}`} key={service._id}>
                                <ListGroup.Item                                    
                                    action
                                    variant="light">
                                    {service.serviceName}
                                </ListGroup.Item>
                            </Link>
                    )
                }
            </ListGroup>
        </div>
    );
};

export default LeftSideNav;
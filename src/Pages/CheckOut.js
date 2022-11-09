import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const details = useLoaderData();
    const { categoryName} = details[0];
    
    return (
        <h1>
            {categoryName}
        </h1>
    );
};

export default CheckOut;
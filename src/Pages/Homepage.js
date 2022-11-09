import React, { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';

const Homepage = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <div className='mx-4 my-5'>
            <Carousel variant='dark' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src="https://i.ibb.co/NNJ2GqD/set-microsoft-office-products-365-logos-593228-131.jpg"
                        alt="First slide"
                    ></Image>
                    <div className='text-center my-5'>
                        <h3>Train Yourself</h3>
                        
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/LYG8Nbk/Microsoft-Office.jpg"
                        alt="Third slide"
                    />

                    <div className='text-center my-5'>
                        <h3>Build Yourself</h3>
                        
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/L1zsf4D/01-office-family.png"
                        alt="Third slide"
                    />

                    <div className='text-center my-5'>
                        <h3>Embrace Yourself</h3>
                        
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/McpmRQk/m365.png"
                        alt="Fourth slide"
                    />

                    <div className='text-center my-5'>
                        <h3>Enjoy Yourself</h3>
                        
                    </div>
                </Carousel.Item>
            </Carousel>


        </div>
    );
};

export default Homepage;
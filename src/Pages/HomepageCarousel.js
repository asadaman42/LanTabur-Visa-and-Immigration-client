import React, { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';


const HomepageCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel variant='white' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="https://livcs.com/wp-content/themes/immiex/images/slider/slide-1.jpg"
                    alt="First slide"
                ></Image>

                <Carousel.Caption>
                    <h3>FREE CONSULTATION</h3>
                    <p>Talk to us for family visa, skilled & business migration, & visitor visa</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="https://livcs.com/wp-content/uploads/2022/08/Canada-investor-visa.jpg"
                    alt="Second slide"
                ></Image>

                <Carousel.Caption>
                    <h3>SKILLED & BUSINESS IMMIGRATION</h3>
                    <p>Canada | Australia | USA</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="https://livcs.com/wp-content/uploads/2022/08/Australia-Immigration.jpg"
                    alt="Third slide"
                ></Image>

                <Carousel.Caption>
                    <h3>CHOOSE YOUR DESTINATION!</h3>
                    <p>We Provide Clear Advice For Your Migration To Canada, Australia, USA</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HomepageCarousel;
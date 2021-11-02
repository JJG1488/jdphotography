import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import placeholderImage from '../../assets/image/detroit-reflection-cityscape-city-lights-wallpaper-preview.jpeg';



function MainSlideShow() {
    return (<div>
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={placeholderImage}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First Article of Clothing</h3>
                    <p>Maybe put a model here wearing a hat and hoodie?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={placeholderImage}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second Article of Clothing</h3>
                    <p>Maybe put your favorite article of clothing here</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={placeholderImage}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third Article of Clothing</h3>
                    <p>Maybe put a shirt, hat, and hoodie layed out across a table??</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    </div>)
}

export default MainSlideShow;
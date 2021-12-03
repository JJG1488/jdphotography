import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../../../assets/image/Shirts/Resized_PicsArt_06-21-06.22.14.jpg';
import image2 from '../../../../../assets/image/Hoodies_Curated/Resized_PicsArt_11-03-12.19.40.jpg';
// import image3 from '../../assets/image/Shirts/Resized_20210228_042920.jpg';



function MainSlideShow() {
    return (<div style={{}}>
        <Carousel>
            <Carousel.Item interval={2000}>
                <img className="d-inline-block w-100"
                    src={image1}
                    alt="First slide"
                    style={{height: '20rem'}}
                />
                <Carousel.Caption>
                    {/* <h3>First Article of Clothing</h3>
                    <p>Maybe put a model here wearing a hat and hoodie?</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="d-inline-block w-100"
                    src={image2}
                    alt="Second slide"
                    style={{height: "20rem"}}
                />
                <Carousel.Caption>
                    {/* <h3>Second Article of Clothing</h3>
                    <p>Maybe put your favorite article of clothing here</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-inline-block w-100"  
                    src={image2}
                    alt="Third slide"
                    style={{height: "20rem"}}
                />
                <Carousel.Caption>
                    {/* <h3>Third Article of Clothing</h3>
                    <p>Maybe put a shirt, hat, and hoodie layed out across a table??</p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    </div>)
}

export default MainSlideShow;
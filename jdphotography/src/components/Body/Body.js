import React from "react";
import './styles.css';
import { useEffect } from 'react';
// import Logo from '../Logo/Logo';
// import MainSlideShow from "../MainSlideShow/MainSlideShow";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import ImageWithButtons from '../ImageWithButtons/ImageWithButtons';
// import ShirtButton from "../PageButtons/ShirtButton/ShirtButton";
// import HatButton from "../PageButtons/HatButton/HatButton";
// import HoodieButton from "../PageButtons/HoodieButton/HoodieButton";
import LowerBodyNav from "../LowerBodyNav/LowerBodyNav";
import LowerBodyContent from "../LowerBodyContent/LowerBodyContent";
import ContactForm from '../ContactForm/ContactForm';
import Subscribe from '../Subscribe/Subscribe';
// import GoogleMap from '../GoogleMap/GoogleMap';

// import FontAwesomeIcons from '../FontAwesomeIcon/FontAwesomeIcon';


function Body() {

    const checkBoxes = function () {
        const boxes = document.querySelectorAll('.box');
        window.addEventListener('scroll', checkBoxes);
        // find trigger pointerup
        const triggerBottom = window.innerHeight / 5 * 4;
        // console.log(triggerBottom)
        boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top
            // console.log(boxTop)

            if (boxTop < triggerBottom) {
                box.classList.add('show')

            } else {
                box.classList.remove('show')
            }
        })
    }

    useEffect(checkBoxes, [checkBoxes])

    return (
        <div className="body">
            <Container >

                <h1 className="introduction">See What's In Stock</h1>

                <Row className="product-row code box" fluid="true">
                    <ImageWithButtons />
                    <p>Click one of the pictures above to see whats in stock. Good Peeps has a great range of
                        selection of hoodies, hats, and shirts.

                    </p>
                    {/* CSS: On Hover, zoom in */}
                </Row>

                <h1 className="introduction-1">Hot Apparel</h1>

                <Row>
                    <Col>
                        <LowerBodyNav className="aside code box" />
                        <LowerBodyNav className="aside code box" />
                    </Col>
                </Row>

                <h1 className="introduction-1">About Good Peeps</h1>

                <Row className="product-row code box">
                    <Col>
                        <LowerBodyContent className="main code box" />
                    </Col>
                </Row>

                <h1 className="introduction-1">Stay In The Know</h1>

                <Row fluid="true">
                    <Col fluid="true">
                        {/* <div className="section code box questions">
                            set up button that leads to a form where you can submit questions
                            CSS: onHover expand Content/ words
                        </div> */}
                        <ContactForm />
                    </Col>
                    <Col fluid="true">
                        {/* <div className="section code box subscribe">
                            Subscribe to webpage for more content to reach out to returning customers
                            CSS: onHover expand Content/ words
                        </div> */}
                        <Subscribe />
                    </Col>
                </Row>

                {/* <h1 className="introduction-1">Find Us</h1> */}

                <div className="section code box map">
                    {/* <GoogleMap /> */}

                    {/* <FontAwesomeIcons /> */}
                    {/* Facebook, Instagram, Twitter */}
                </div>

            </Container>
        </div>
    )

}

export default Body;
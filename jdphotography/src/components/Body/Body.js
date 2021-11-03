import React from "react";
import './styles.css';
import { useEffect } from 'react';
import Logo from '../Logo/Logo';
import MainSlideShow from "../MainSlideShow/MainSlideShow";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import ShirtButton from "../ShirtButton/ShirtButton";
import HatButton from "../HatButton/HatButton";
import HoodieButton from "../HoodieButton/HoodieButton";
import BodyNav from "../BodyNav/BodyNav";
import BodyContent from "../BodyContent/BodyContent";




function Body() {

    const checkBoxes = function () {
        const boxes = document.querySelectorAll('.box');
        window.addEventListener('scroll', checkBoxes);
        // find trigger pointerup
        const triggerBottom = window.innerHeight / 5 * 4;
        console.log(triggerBottom)
        boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top
            console.log(boxTop)

            if (boxTop < triggerBottom) {
                box.classList.add('show')

            } else {
                box.classList.remove('show')
            }
        })
    }

    useEffect(checkBoxes)

    return (
        <div className="body">

            <Container fluid>

                <header className="header code">
                    <Logo />
                </header>

                <Row fluid="true">
                    <div className="main code">
                        <MainSlideShow />
                    </div>
                </Row>

                <Row fluid="true">
                    <Col>
                        <div className="section code box">
                            <ShirtButton />
                            CSS: On Hover, zoom in
                        </div>
                    </Col>

                    <Col>
                        <div className="section code box">
                            <HoodieButton />
                            CSS: On Hover, zoom in
                        </div>
                    </Col>
                    <Col>

                        <div className="section code box">
                            <HatButton />
                            CSS: On Hover, zoom in
                        </div>
                    </Col>
                </Row>

                <hr />

                <div className="aside code box">
                    <BodyNav />
                </div>

                <div className="main code box">
                    <BodyContent />

                </div>
                <Row fluid="true">
                    <Col fluid="true">
                        <div className="section code box questions">
                            set up button that leads to a form where you can submit questions
                            CSS: onHover expand Content/ words
                        </div>
                    </Col>
                    <Col fluid="true">
                        <div className="section code box subscribe">
                            Subscribe to webpage for more content to reach out to returning customers
                            CSS: onHover expand Content/ words
                        </div>
                    </Col>
                </Row>

                <div className="section code box map">
                    Large Map to show location with logo and any other supporting websites to find work.
                    Facebook, Instagram, Twitter
                </div>

            </Container>


        </div>
    )

}

export default Body;
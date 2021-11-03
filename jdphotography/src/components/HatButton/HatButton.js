import React from "react";
// import Image from 'react-bootstrap/Image';
// import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import hatButton from '../../assets/image/A5-clean-hat-social-1200X630.jpeg';
import './styles.css';

function HatButton() {
    return (<div>
        {/* <Image className="hat-button" src={hatButton} fluid thumbnail /> */}
        <Figure>
            <Figure.Image
                width={200}
                height={200}
                alt="171x180"
                src={hatButton}
                className="hat-button"
            />
            <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
                Some quick example text to build on the card title and make up the bulk of
                the card's content.

            </Figure.Caption>
            <Button variant="primary">See Hats</Button>
        </Figure>
        </div>)
}

export default HatButton;
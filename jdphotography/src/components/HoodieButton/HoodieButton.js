import React from "react";
import './styles.css';
// import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import hoodieImage from '../../assets/image/IMG_1304.PNG'

function HoodieButton() {
    return (<div>

        {/* <Image className="hoodie-button"  src={hoodieImage} fluid thumbnail /> */}



        {/* <Card.Img variant="top" src={hoodieImage} className="hoodie-button" /> */}
        <Figure>
            <Figure.Image
                width={200}
                height={200}
                alt="171x180"
                src={hoodieImage}
                className="hoodie-button"
            />
            <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
                Some quick example text to build on the card title and make up the bulk of
                the card's content.

            </Figure.Caption>
            <Button variant="primary">See Hoodies</Button>
        </Figure>

        


    </div>)
}

export default HoodieButton;
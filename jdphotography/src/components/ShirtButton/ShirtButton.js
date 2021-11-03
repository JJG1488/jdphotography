import React from "react";
// import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import shirtButton from '../../assets/image/tshirts-1613587154.jpeg';
import './styles.css';

function ShirtButton() {
    return (<div>
        {/* <Image className="shirt-button" src={shirtButton} fluid thumbnail /> */}
        {/* <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={shirtButton} className="shirt-button" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card> */}

        <Figure>
            <Figure.Image
                width={200}
                height={200}
                alt="171x180"
                src={shirtButton}
                className="shirt-button"
            />
            <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
                Some quick example text to build on the card title and make up the bulk of
                the card's content.

            </Figure.Caption>
            <Button variant="primary">See Shirts</Button>
        </Figure>
    </div>)
}

export default ShirtButton;
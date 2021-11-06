import React from "react";
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import shirtImage from '../../assets/image/Shirts/Resized_PicsArt_09-22-10.33.53.jpg';
import hoodieImage from '../../assets/image/Hoodies_Curated/Resized_PicsArt_11-03-12.41.15.jpg'
import './styles.css';
import hatImage from '../../assets/image/Shirts/Resized_PicsArt_03-22-12.10.49(1).jpg';
import lilPeepsImage from '../../assets/image/Lil_Peeps/Resized_20211104_132854.jpg';



function ImageWithButtons() {
    return (<div>

<Button href="#hoodies" className="image-button">
        <Figure>
            <Figure.Image
                width={200}
                height={200}
                alt="171x180"
                src={hoodieImage}
                className="hoodie-button box"
            />
            {/* <Button variant="primary">See Hoodies</Button> */}
        </Figure>
        </Button>


        <Button href="#contact">
        <Figure>
            <Figure.Image
                width={200}
                height={200}
                alt="171x180"
                src={hatImage}
                className="hat-button box"
            />
            {/* <Button variant="primary">See Hats</Button> */}
        </Figure>
        </Button>

        <br/>


        <Button href="#contact">
        <Figure>
            <Figure.Image
                width={200}
                height={200}
                alt="171x180"
                src={shirtImage}
                className="shirt-button box"
            />
            {/* <Button variant="primary">See Shirts</Button> */}
        </Figure>
        </Button>


        <Button href="#contact">
            <Figure>
                <Figure.Image
                    width={200}
                    height={200}
                    alt="171x180"
                    src={lilPeepsImage}
                    className="shirt-button box"
                />
                {/* <Button variant="primary">See Shirts</Button> */}
            </Figure>
        </Button>
    </div>)
}

export default ImageWithButtons;
import React from "react";
import './styles.css';
import bodyContentPhoto from '../../assets/image/modern-business-buildings-11681736.jpeg';
// import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';

function LowerBodyContent() {
    return (
        <div>
            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={bodyContentPhoto}
                    className="body-content-img box"
                    fluid
                />
                <Figure.Caption>
                    <p className="body-paragraph box">"Sed ut perspiciatis unde
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                        et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                        esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

                    </p>
                    <Button variant="primary" href="/">
                        Learn More
                    </Button>

                </Figure.Caption>
            </Figure>
            {/* <Image className="body-content-img" src={bodyContentPhoto} thumbnail /> */}



            {/* <button className="learn-more-btn" >Learn More</button> */}
        </div>
    )
}

export default LowerBodyContent;
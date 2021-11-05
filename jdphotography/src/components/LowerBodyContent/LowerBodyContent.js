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
                    <p className="body-paragraph box">"Sed ut perspiciatis unde eaque ipsa quae ab illo inventore veritatis
                        et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                        esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

                    </p>
                    <Button variant="primary" href="#about">
                        Learn More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </Button>

                </Figure.Caption>
            </Figure>
            {/* <Image className="body-content-img" src={bodyContentPhoto} thumbnail /> */}



            {/* <button className="learn-more-btn" >Learn More</button> */}
        </div>
    )
}

export default LowerBodyContent;
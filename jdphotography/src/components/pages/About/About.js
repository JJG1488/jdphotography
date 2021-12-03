import React from 'react';
import Figure from 'react-bootstrap/Figure';
// import Button from 'react-bootstrap/Button';
import bodyContentPhoto from '../../../assets/image/Professional_photo/20210526_1646071.jpg';
import './style.css';



function About() {
    return (
        <div>
            <h2 className="who-are-good-peeps">Who Are Good Peeps?</h2>
            <div>
                <Figure>
                    <Figure.Image
                        alt="171x180"
                        src={bodyContentPhoto}
                        className="body-content-img box inline-block"
                        fluid
                        style={{ display: 'inline-block', borderRadius: '50%' }}
                    />
                    <Figure.Caption>
                        <p className="body-paragraph box">You are! The Good Peeps brand is about encouraging everyone to be true to themselves and others and standing up for good natured individuals in a time where good people seem scarce. I am true to this brand as it is a constant reminder that there is always work to be done and this is why Good Peeps puts quality over quantity. Quality people produce quality items and all supporters of Good Peeps are considered family so expect to be treated as such when you see other good peeps out there.
                        </p>
                        {/* <Button variant="primary" href="#about">
                        Learn More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </Button> */}

                    </Figure.Caption>
                </Figure>
                {/* <Image className="body-content-img" src={bodyContentPhoto} thumbnail /> */}



                {/* <button className="learn-more-btn" >Learn More</button> */}
            </div>
        </div>
    )
}


export default About;
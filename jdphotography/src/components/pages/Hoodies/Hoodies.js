import React from 'react';
import './styles.css';
import { Card, Button, Figure } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import hoodie1 from '../../../assets/image/Hoodies_Curated/Resized_20210228_042920.jpg';
import hoodie2 from '../../../assets/image/Hoodies_Curated/Resized_20211104_123546.jpg';

const Hoodies = () => (

    <div>

        <h1 style={{ display: 'inline-block', width: '100%', justifyContent: 'center' }}>Hoodies</h1>
        <div id="hoodies-container">
            <Carousel>
                <Carousel.Item interval={3000}>
                    <Card style={{ width: '18rem'}}>
                        <Figure>
                            <Figure.Image src={hoodie1} />
                        </Figure>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                {/* ===================================================== Next Carousel Item Starts here ===================================================== */}

                <Carousel.Item interval={4000}>
                    <Card style={{ width: '18rem' }}>
                        <Figure>
                            <Figure.Image src={hoodie2} />
                        </Figure>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                {/* ===================================================== Next Carousel Item Starts here ===================================================== */}

                <Carousel.Item interval={4000}>
                    <Card style={{ width: '18rem'}}>
                        <Figure>
                            <Figure.Image src={hoodie2} />
                        </Figure>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                {/* ===================================================== Next Carousel Item Starts here ===================================================== */}

                <Carousel.Item interval={4000}>
                    <Card style={{ width: '18rem' }}>
                        <Figure>
                            <Figure.Image src={hoodie2} />
                        </Figure>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                {/* ===================================================== Next Carousel Item Starts here ===================================================== */}

                <Carousel.Item interval={4000}>
                    <Card style={{ width: '18rem' }}>
                        <Figure>
                            <Figure.Image src={hoodie2} />
                        </Figure>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                {/* ===================================================== Next Carousel Item Starts here ===================================================== */}

                <Carousel.Item interval={4000}>
                    <Card style={{ width: '18rem' }}>
                        <Figure>
                            <Figure.Image src={hoodie2} />
                        </Figure>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                {/* ===================================================== Next Carousel Item Starts here ===================================================== */}

                <Carousel.Item interval={4000}>
                    <Card style={{ width: '18rem' }}>
                        <Figure>
                            <Figure.Image src={hoodie2} />
                        </Figure>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                {/* ===================================================== Next Carousel Item Starts here ===================================================== */}

                <Carousel.Item interval={4000}>
                    <Card style={{ width: '18rem' }}>
                        <Figure>
                            <Figure.Image src={hoodie2} />
                        </Figure>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                {/* ===================================================== Next Carousel Item Starts here ===================================================== */}

                <Carousel.Item interval={4000}>
                    <Card style={{ width: '18rem' }}>
                        <Figure>
                            <Figure.Image src={hoodie2} />
                        </Figure>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                {/* ===================================================== Next Carousel Item Starts here ===================================================== */}

                <Carousel.Item interval={4000}>
                    <Card style={{ width: '18rem' }}>
                        <Figure>
                            <Figure.Image src={hoodie2} />
                        </Figure>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>


            </Carousel>


        </div>

    </div>
)

export default Hoodies;

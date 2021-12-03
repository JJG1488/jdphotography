import React from 'react';
import './styles.css';
import { Card, Button, Figure } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import hoodie1 from '../../../assets/image/Hats/Resized_20210221_145355.jpg';
import hoodie2 from '../../../assets/image/Hoodies_Curated/Resized_20211104_123546.jpg';


const Hats = () => (
    <div>
        <h1 style={{ width: '100%', justifyContent: 'center', margin: 'auto 0', marginBottom: '2rem' }}>Hats</h1>
        <div id="hats-container">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <Card style={{ width: '18rem' }}>
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

                <Carousel.Item interval={500}>
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

                <Carousel.Item>
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

                <Carousel.Item>
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

                <Carousel.Item>
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

                <Carousel.Item>
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

                <Carousel.Item>
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

                <Carousel.Item>
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

                <Carousel.Item>
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

                <Carousel.Item>
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

export default Hats;
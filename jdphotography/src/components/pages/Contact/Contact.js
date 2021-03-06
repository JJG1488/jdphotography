import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

const style = {
    display: 'grid',
    justifyContent: 'center',
    backgroundColor: 'hsla(60, 90%, 80%, .3)',
    maxWidth: '30rem',
    padding: '1rem', 
    margin: '2rem auto', 
    color: 'white',
    borderRadius: '1rem' 

}

function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div>
            <h1 className="contact-header">Contact</h1>
            <div className="form-container">
                <Form noValidate validated={validated} onSubmit={handleSubmit} style={style}>
                    <Row className="mb-3">
                        <Form.Group md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue=""
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group  md="4" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                defaultValue=""
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group md="4" controlId="validationCustomUsername">
                            {/* <Form.Label>Username</Form.Label> */}

                            <Form.Group md="4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control md="4" as="textarea" rows={4} />
                            </Form.Group>
                            <InputGroup hasValidation>

                                {/* <Form.Group md="4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control md="4" as="textarea" rows={4} />
                            </Form.Group> */}

                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="State" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" placeholder="Zip" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid zip.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
            </div>
        </div>
    );
}



export default Contact;
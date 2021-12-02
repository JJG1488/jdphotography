import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import "./styles.css";
import logo from '../../assets/image/Professional_photo/20210526_1646071.jpg';
// import MainSlideShow from '../MainSlideShow/MainSlideShow';
import Offcanvas from 'react-bootstrap/Offcanvas'

function NavTabs() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (<div>
        <div className="container">
            <div className="row" id="navTabsRow">
                {/* This webpage is under construction. All of the functionality has not been added. Thank You For Your Patience.<br /> */}

                {/* <Canvas>
                        <ambientLight />
                        <pointLight position={[0, 1, 0]} />
                        <Box position={[-7, 0, 1]} />
                        <Box position={[7, 0, 1]} />
                    </Canvas> */}
            </div>
        </div>

        {/* <Navbar bg="dark" variant="dark" > */}
        {/* <Container > */}
        {/* <Navbar.Brand href="/home">
                    <img
                        alt="Good Peeps Clothing Line Logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    <span className="logo">
                        <h1>Good Peeps</h1>
                        
                    </span>
                    <p>But don't get it twisted</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="me-auto" >
                        <Nav.Link href="/home"><span id="nav-link-text">Home</span></Nav.Link>
                        <Nav.Link href="/about"><span id="nav-link-text">About</span></Nav.Link>
                        <Nav.Link href="/"><span id="nav-link-text">Contact</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
        {/* </Container> */}
        {/* </Navbar> */}


        <Navbar bg="dark" variant="dark" expand="l" id="nav-data" style={{ position: "fixed", zIndex: 1, width: '100%', top: '0' }}>
            <Navbar.Brand href="#home"><small><img
                alt="Good Peeps Clothing Line Logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            /></small>
                <span className="good-peeps">Good Peeps</span>

                <span className="logo"> <p>But don't get it twisted</p></span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
            {/* <Navbar.Collapse> */}
            {/* <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Link href="#home"><span id="nav-link-text">Home</span></Nav.Link>
                        <Nav.Link href="#about"><span id="nav-link-text">About</span></Nav.Link>
                        <Nav.Link href="#contact"><span id="nav-link-text">Contact</span></Nav.Link>
                        <Nav.Link href="#hoodies"><span id="nav-link-text">Hoodies</span></Nav.Link>
                        <Nav.Link href="#hats"><span id="nav-link-text">Hats</span></Nav.Link>
                        <Nav.Link href="#shirts"><span id="nav-link-text">Shirts</span></Nav.Link>
                        <Nav.Link href="#lilpeeps"><span id="nav-link-text">Lil Peeps</span></Nav.Link> */}

            {/* <Nav.Link href="https://1drv.ms/w/s!AoCauJZ3EHFdgwMB4s6gnDG-WQOe" rel="noreferrer" target="_blank"><span id="nav-link-text">Resume</span></Nav.Link> */}
            {/* </Nav> */}
            {/* </Navbar.Collapse> */}
        </Navbar>

        {/* <Button variant="primary" onClick={handleShow}>
                Launch
            </Button> */}

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton style={{backgroundColor: 'rgba(25, 25, 25, 1)', color: "white"}}>
                <Offcanvas.Title style={{margin: '0 auto'}}>Nav</Offcanvas.Title>
            </Offcanvas.Header>
            {/* color: white;
  background-color: rgba(25, 25, 25, 1); */}
            <Offcanvas.Body style={{ display:'grid', backgroundColor: 'rgba(25, 25, 25, 1)', color: 'orange' }}>
                <Nav className="justify-content-center" activeKey="/home">
                    <pre className="pre-links" >
                        <Nav.Link href="/home"><span id="nav-link-text">Home</span></Nav.Link>
                        <hr/>
                        <Nav.Link href="/about"><span id="nav-link-text">About</span></Nav.Link>
                        <hr/>
                        <Nav.Link href="/contact"><span id="nav-link-text">Contact</span></Nav.Link>
                        <hr/>
                        <Nav.Link href="/hoodies"><span id="nav-link-text">Hoodies</span></Nav.Link>
                        <hr/>
                        <Nav.Link href="/hats"><span id="nav-link-text">Hats</span></Nav.Link>
                        <hr/>
                        <Nav.Link href="/shirts"><span id="nav-link-text">Shirts</span></Nav.Link>
                        <hr/>
                        <Nav.Link href="/lilpeeps"><span id="nav-link-text">Lil Peeps</span></Nav.Link>
                    </pre>
                    {/* <Nav.Link href="https://1drv.ms/w/s!AoCauJZ3EHFdgwMB4s6gnDG-WQOe" rel="noreferrer" target="_blank"><span id="nav-link-text">Resume</span></Nav.Link> */}
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>

        {/* <MainSlideShow /> */}



    </div>)
}

export default NavTabs;
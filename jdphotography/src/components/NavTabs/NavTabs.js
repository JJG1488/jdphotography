import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
import "./styles.css";
import logo from '../../assets/image/Professional_photo/20210526_1646071.jpg';
// import MainSlideShow from '../MainSlideShow/MainSlideShow';

function NavTabs() {
    return (<div>
        <div className="container">
            <div className="row" id="navTabsRow">
                This webpage is under construction. All of the functionality has not been added. Thank You For Your Patience.<br />

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



        <Navbar bg="dark" variant="dark" expand="md" id="nav-data">
            <Navbar.Brand href="#home"><small><img
                alt="Good Peeps Clothing Line Logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            /></small>
                    Good Peeps
                
                <span className="logo"> <p>But don't get it twisted</p></span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home"><span id="nav-link-text">Home</span></Nav.Link>
                    <Nav.Link href="#about"><span id="nav-link-text">About</span></Nav.Link>
                    <Nav.Link href="#contact"><span id="nav-link-text">Contact</span></Nav.Link>
                    {/* <Nav.Link href="https://1drv.ms/w/s!AoCauJZ3EHFdgwMB4s6gnDG-WQOe" rel="noreferrer" target="_blank"><span id="nav-link-text">Resume</span></Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        {/* <MainSlideShow /> */}



    </div>)
}

export default NavTabs;
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import "./styles.css";

function NavTabs() {
    return (<div>
        <div className="container">
            <div className="row" id="navTabsRow">
                {/* <Canvas>
                        <ambientLight />
                        <pointLight position={[0, 1, 0]} />
                        <Box position={[-7, 0, 1]} />
                        <Box position={[7, 0, 1]} />
                    </Canvas> */}
            </div>
        </div>
        <Navbar bg="light" variant="light" expand="md" className="nav-data">
            <Navbar.Brand href="#home"><span className="logo"> GP </span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home"><span id="nav-link-text">Home</span></Nav.Link>
                    <Nav.Link href="#portfolio"><span id="nav-link-text">About</span></Nav.Link>
                    <Nav.Link href="#contact"><span id="nav-link-text">Contact</span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>)
}

export default NavTabs;
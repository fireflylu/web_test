import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const color = {
    "background-color": "#26bfe5"
}

function Navigation() {
    const [ activeKey , setActiveKey ] = useState("#home");

    const handleBrandClick = () => {
        setActiveKey("$home");
    }

    return (
        <Navbar expand = 'lg' style = {color}>
            <Container>
                <Navbar.Brand href="#home" onClick = {handleBrandClick}>firefly</Navbar.Brand>
                <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav classname = "me-auto" activeKey = {activeKey} on Select = {(selectedKey) => setActiveKey(selectedKey)}>
                        <Nav.Link href = "#home">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
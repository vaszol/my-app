import React, { Component } from 'react'
import { Navbar, Nav, FormControl, Form, Container } from 'react-bootstrap'
import logo from './logo.png'

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height={30}
                                width={30}
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className="me-auto my-2 my-lg-0">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/About">About us</Nav.Link>
                                <Nav.Link href="/contacts">Contacts</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="me-sm-2"
                                />
                            </Form>
                            <button variant="outline-info">Search</button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}
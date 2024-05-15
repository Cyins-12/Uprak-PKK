import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top" style={{ height: '60px', width: '100%' }}>
            <Container fluid>
                <Navbar.Brand href="/" style={{ paddingTop:'11px'}}>
                    <img src={logo} className="logo" alt="Logo" style={{ maxWidth: '120px', marginRight: '-35px'}}/>
                    <span style={{ lineHeight: '1', fontSize: '1.25rem',fontWeight: 'bold' }}>NOVEL</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav navbarScroll>
                        <Nav.Link className='Home'>
                            <span className='hm'>
                            <   Link to ="/page" style={{ color: '#545454', textDecoration: 'none' , fontWeight: 'bold'}}>
                                Home
                                </Link>
                            </span>
                        </Nav.Link>
                        <Nav.Link className='Home'>
                            <span className='hm'>
                            <   Link to ="/page2" style={{ color: '#545454', textDecoration: 'none' , fontWeight: 'bold'}}>
                                Rating
                                </Link>
                            </span>
                        </Nav.Link>
                        <NavDropdown className='Kat' title="Kategori" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>

                        <Form className="d-flex">
                            <FontAwesomeIcon icon={faSearch} className="search-icon" />
                            <Form.Control type="search" placeholder="Telusuri" className="src" aria-label="Search" 
                                style ={{width: '700px', backgroundColor: 'transparent', border: 'none'}}/>
                        </Form>
                        <Nav className='form-login'>
                            <Nav.Link href="#masuk">Masuk</Nav.Link>
                            <Nav.Link href="#daftar">Daftar</Nav.Link>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;

import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    return (
        
        <Navbar bg="dark" expand="lg" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/saved'>Saved Recipes</Nav.Link>
                <Button href='/login' variant='outline-light'>Login</Button>
            </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Search Recipes" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
        </Form>
        </Navbar>
    )
}
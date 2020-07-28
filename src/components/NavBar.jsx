import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Navbar, Nav, Button, Form, FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavBar extends Component {
    logout = this.logout.bind(this)

    logout () {
        localStorage.removeItem('currentUser')
        localStorage.removeItem('token')
        localStorage.removeItem('searchResult')}
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/saved'>Saved Recipes</Nav.Link>
                    <Nav.Link href='/search'>Search Recipes</Nav.Link>
                    {localStorage.getItem('currentUser') ?
                        (<>
                            <Button onClick={() => this.logout()} variant='outline-light'>Logout</Button>
                        </>) :
                        (<>
                            <Button href='/login2' variant='outline-light'>Login</Button>
                            <Button href='/login' variant='outline-light'>Sign-Up</Button>
                    </>)}
                </Nav>
            </Navbar>
        )
    }
}

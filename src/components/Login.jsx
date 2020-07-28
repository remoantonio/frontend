import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Forms from './Forms.jsx'


export default function Login(props) {

    return (
        <Container className="mx-auto" style={{width: '40em'}} fluid>
            <h1>Login/Sign Up</h1>
            <Forms setUser={props.setUser} />
        </Container>
    )

}

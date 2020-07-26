import React from 'react'
import {Redirect} from 'react-router-dom'
import {Form, Button, Container} from 'react-bootstrap'

class Forms extends React.Component {

  state = {
    userName: '',
    password: '',
    password2: '',
    message: '',
    redirects: false,
  }

  handleChange = (event) => {
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value,
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    fetch(this.props.baseURL + '/user/new', {
      method: 'POST',
      body: JSON.stringify({
        userName: this.state.userName,
        password: this.state.password,
        password2: this.state.password2,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => {
      return res.json();
    }).then(data => {
      if (data.message) {
        this.setState({
          message: data.message
        })
      } else {
        this.props.setUser(data);
        this.setState({
          userName: '',
          password: '',
          password2: '',
          redirect: true
        });
      }
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
    return (
      <Container>
      <Form.Group onSubmit={(evt) => this.handleSubmit(evt)}>
        <Form.Label htmlFor="userName">Username: </Form.Label>
        <Form.Control type="text" id="userName"
          onChange={(evt) => this.handleChange(evt)}
          value={this.state.userName} />
        <br />

        <Form.Label htmlFor="password">Password: </Form.Label>
        <Form.Control type="password" id="password"
          onChange={(evt) => this.handleChange(evt)}
          value={this.state.password} />
        <br />


        <Form.Label htmlFor="password2">Re-enter Password: </Form.Label>
        <Form.Control type="password" id="password2"
          onChange={(evt) => this.handleChange(evt)}
          value={this.state.password2} />
        <br />
        {this.state.message}
        <br />



        <Button variant="warning" type="submit" onClick={this.handleSubmit}>
    Submit
  </Button>
      </Form.Group>
      </Container>

    )

  }
}




export default Forms
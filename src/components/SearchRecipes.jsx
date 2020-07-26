import React, { Component } from 'react'
import {Card, Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Recipes from './Recipes'


export default class SearchRecipes extends Component {
  state = {
    searched: false,
    data: ""
  }
  toggleSearch = this.toggleSearch.bind(this)

  toggleSearch () {
    let toggle = !this.state.searched
    this.setState({
      searched : toggle
    })
  }

  render() {
    return (
      <Container fluid>
        <Recipes toggleSearch={this.toggleSearch} data={this.state.data} searched={this.state.searched} />
        {/* {this.state.searched ? (
          <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" src={this.state.data.image} />
            <Card.Body className="d-flex flex-column">
              <div className="d-flex mb-2 justify-content-between">
                <Card.Title className="mb-0 font-weight-bold">{this.state.data.label}</Card.Title>
              </div>
              <Card.Text className="text-secondary">{this.state.data.yield}</Card.Text>
              <Button
                // onClick={() => setOrdered()}
                className="mt-auto font-weight-bold"
                variant="success"
                block
              >
                Show More
          </Button>
            </Card.Body>
          </Card>) : (<></>)
        } */}
      </Container>
    )
  }
}

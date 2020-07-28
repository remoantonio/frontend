import React, { Component } from 'react';
import {Card, Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Show from './Show.jsx'



class SavedRecipesInfo extends Component {
  
  render() {
    return (
      <Card style={{ width: '18rem' }} className="h-100 shadow-sm bg-white rounded">
        <Card.Img variant="top" src={this.props.recipe.image} />
        <Card.Body className="d-flex flex-column ">
          <div className="d-flex mb-2 justify-content-between">
            <Card.Title className="mb-0 font-weight-bold">{this.props.recipe.label}</Card.Title>
          </div>
          <Card.Text className="text-secondary">Yields: {this.props.recipe.yield} </Card.Text>
          <Card.Text className="text-secondary">Calories :{Math.floor(this.props.recipe.calories)}</Card.Text>
          {/* <Button
            className="mt-auto font-weight-bold"
            variant="warning"
            block
            onClick = {() => this.props.renderShow}
          >
            Show More
          </Button> */}
          <Button
            className="mt-auto font-weight-bold"
            variant="warning"
            block
            onClick = {() => this.props.addRecipe(this.props.id)}
          >
            Fork_it
          </Button>
        </Card.Body>
      </Card>
    )
  }
}


export default SavedRecipesInfo;
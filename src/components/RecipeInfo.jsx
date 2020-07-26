import React, { Component } from 'react';
import {Card, Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



class RecipeInfo extends Component {
  render() {
    const recipes = this.props.recipe.map(recipes => {
      return (
        // <tr key={ recipes._id }>
        //     {/* <h1>Hello</h1> */}
        //   <td>{ recipes.recipe.label }</td>
        // </tr>
        <Card className="h-100 shadow-sm bg-white rounded">
          <Card.Img variant="top" src={recipes.recipe.image} />
          <Card.Body className="d-flex flex-column">
            <div className="d-flex mb-2 justify-content-between">
              <Card.Title className="mb-0 font-weight-bold">{recipes.recipe.label}</Card.Title>
            </div>
            <Card.Text className="text-secondary">Yields: {recipes.recipe.yield} </Card.Text>
            <Card.Text className="text-secondary">Calories :{recipes.recipe.calories}</Card.Text>
            <Button
              // onClick={() => setOrdered()}
              className="mt-auto font-weight-bold"
              variant="success"
              block
            >
              Show More
          </Button>
          </Card.Body>
        </Card>
      )
    })
    return (
      <div>
        <h1>Recipe:</h1>
        {recipes}
      </div>
    )
  }
}

export default RecipeInfo;
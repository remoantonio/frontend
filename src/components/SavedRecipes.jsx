import React, { Component } from 'react';
import RecipeInfo from './RecipeInfo'
import { Card, Button, Container, Form, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SavedRecipesInfo from './SavedRecipesInfo.jsx'

export default class SavedRecipes extends Component {
  state = {
    recipe: ""
  }

  componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    

    fetch(process.env.REACT_APP_BASE_URL + "/fork/savedRecipes", requestOptions)
      .then(response => response.text())
      .then(result => 
        this.setState({
          recipe: JSON.parse(result)
        })
      )
      .catch(error => console.log('error', error));
  }
  render() {
    return (
      <>
        {this.state.recipe ? (
          <Row >
            {/* {console.log(this.state.recipe)} */}
            {this.state.recipe.map((recipe, index) => {
              return (
                <Col md='auto' className="mb-5">
                  <SavedRecipesInfo recipe={recipe} id={index} addRecipe={this.addRecipe} />
                </Col>
              )
            })}
          </Row>) : (<></>)}
      </>
    )
  }
}
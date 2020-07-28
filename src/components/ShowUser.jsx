import React, { Component } from 'react'
import RecipeInfo from './RecipeInfo.jsx'
import {Card, Button, Container} from 'react-bootstrap'

export default class ShowUser extends Component {
  state = {
    recipeInfo : ''
  }

  state = {
    recipeInfo : JSON.parse(localStorage.getItem('searchResult'))[this.props.match.params.id].recipe
  }

  addRecipe = this.addRecipe.bind(this)

  addRecipe () {
    let shortRecipe = {
        calories : Math.floor(this.state.recipeInfo.calories),
        dietLabels : this.state.recipeInfo.dietLabels,
        image : this.state.recipeInfo.image,
        ingredients : this.state.recipeInfo.ingredients,
        label : this.state.recipeInfo.label,
        url : this.state.recipeInfo.url,
        yield : this.state.recipeInfo.yield,
        healthLabels : this.state.recipeInfo.healthLabels,
    }
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      userName : localStorage.getItem('currentUser'),
      recipe: shortRecipe
    });
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(process.env.REACT_APP_BASE_URL + "/fork/add", requestOptions)
      .then(response => response.text())
      .then(result => console.log('here',result))
      .catch(error => console.log('error', error));
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
          recipeInfo: JSON.parse(result)[this.props.match.params.id]
        })
      )
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <Card style={{ width: '50rem' }} className="h-100 shadow-sm bg-white rounded">
      <Card.Img variant="top" src={this.state.recipeInfo.image}  />
      <Card.Body className="d-flex flex-column ">
        <div className="d-flex mb-2 justify-content-between">
          <Card.Title className="mb-0 font-weight-bold">{this.state.recipeInfo.label}</Card.Title>
        </div>
        <Card.Text className="text-secondary">Yields: {this.state.recipeInfo.yield} </Card.Text>
        <Card.Text className="text-secondary">Calories :{Math.floor(this.state.recipeInfo.calories)}</Card.Text>
        <Card.Text className="text-secondary">Diet Labels: {this.state.recipeInfo.dietLabels} </Card.Text>
        <Card.Text className="text-secondary">Health Labels: {this.state.recipeInfo.healthLabels} </Card.Text>
        <Card.Text className="text-secondary">Ingredients:</Card.Text>
        {this.state.recipeInfo.ingredients.map((recipe, index) => {
              return (
                <Card.Text className="text-secondary">{this.state.recipeInfo.ingredients[index].text} </Card.Text>
              )
            })}


        <Button
          className="mt-auto font-weight-bold"
          variant="warning"
          block
          href= {this.state.recipeInfo.url}
          target = "_blank"
        >
          Recipe Link
        </Button>



        <Button
          className="mt-auto font-weight-bold"
          variant="warning"
          block
          onClick={() => this.addRecipe()}
        >
          Fork_it
        </Button>
      </Card.Body>
    </Card>
    )
  }
}
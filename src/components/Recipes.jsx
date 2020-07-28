import React, { Component } from 'react';
import RecipeInfo from './RecipeInfo'
import { Card, Button, Container, Form, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Show from './Show.jsx'

class Recipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      baseURL: 'https://api.edamam.com/search?app_id=c180e9f7&app_key=15b9007e988ab8d62a093bbfa45635bb&q=',
      recipeName: '',
      searchURL: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.addRecipe = this.addRecipe.bind(this)
    this.renderShow = this.renderShow.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.recipeName
    }, () => {
      fetch(this.state.searchURL)
        .then(response => {
          return response.json()
        }).then(json => this.setState({
          recipe: json.hits,
          // recipe: json,
          recipeTitle: ''
        }),
          err => console.log(err))
    })
    {
      this.props.toggleSearch()
    }
  }

  addRecipe (id) {
    console.log(this.state.recipe[id].recipe)
    // fetch('https://forkitbackend.herokuapp.com/fork/add', {
    //   method: 'PUT',
    //   body: JSON.stringify({
    //     userName : localStorage.getItem('currentUser'),
    //     recipe: this.state.recipe[event.target.id]
    //   })
    // })
  }

  renderShow(id) {
    return <Show recipe={this.state.recipe[id].recipe} />
  }


  render() {
    return (
      <>
        <Form className='w-50 p-3'>
          <Form.Label htmlFor='recipeName'>Recipe</Form.Label>
          <Form.Control
            id='recipeName'
            placeholder='recipe name or ingredient'
            type='text'
            value={this.state.recipeName}
            onChange={this.handleChange}
          />
          <Button variant='warning' type='submit' onClick={(event) => this.handleSubmit(event)}>
            Find Recipe</Button>
        </Form>


        {this.state.recipe ? (
          <Row >
            {this.state.recipe.map((recipe, index) => {
              return (
                <Col md='auto' className="mb-5">
                  <RecipeInfo recipe={recipe.recipe} id={index} />
                </Col>
              )
            })}
          </Row>) : (<></>)} 
      </>
    )
  }
}


export default Recipes;
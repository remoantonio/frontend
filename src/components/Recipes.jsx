import React, { Component } from 'react';
import RecipeInfo from './RecipeInfo'
import { Card, Button, Container, Form, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Show from './Show.jsx'

let holder = []
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
    this.saveSearch = this.saveSearch.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })}

  handleSubmit(event) {
    event.preventDefault()
    localStorage.removeItem('searchResult')
    holder = []
    this.setState({
      searchURL: this.state.baseURL + this.state.recipeName
    }, () => {
      fetch(this.state.searchURL)
        .then(response => {
          return response.json()
        }).then(json => (
          this.setState({
            recipe: json.hits,
            recipeTitle: ''
          }), this.saveSearch()
        ), err => console.log(err)
        )
    })
    { this.props.toggleSearch() }
  }

  saveSearch() {
    console.log(this.state.recipe)
    for (let i = 0; i < this.state.recipe.length; i++) {
      holder.push(this.state.recipe[i])
      localStorage.setItem('searchResult', JSON.stringify(holder))
    }
  }

  addRecipe (id) {
    let shortRecipe = {
        calories : Math.floor(this.state.recipe[id].recipe.calories),
        dietLabels : this.state.recipe[id].recipe.dietLabels,
        image : this.state.recipe[id].recipe.image,
        ingredientLines : this.state.recipe[id].recipe.ingredientLines,
        label : this.state.recipe[id].recipe.label,
        url : this.state.recipe[id].recipe.url,
        yield : this.state.recipe[id].recipe.yield,
        healthLabels : this.state.recipe[id].recipe.healthLabels,
    }
    // console.log(shortRecipe)
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
    
    fetch("https://forkitbackend.herokuapp.com/fork/add", requestOptions)
      .then(response => response.text())
      .then(result => console.log('here',result))
      .catch(error => console.log('error', error));
  }

  componentDidMount() {
    console.log(localStorage.getItem('searchResult'))
    if (localStorage.getItem('searchResult')) {
      this.setState({
        recipe: JSON.parse(localStorage.getItem('searchResult'))
      })
    }
  }

  render() {
    return (
      <>
        <Form className="mx-auto" style={{width: '40em'}}>
        <Form.Label htmlFor='recipeName'>
            <h3>Recipe</h3>
          </Form.Label>
          <Form.Control
            id='recipeName'
            placeholder='recipe name or ingredient'
            type='text'
            value={this.state.recipeName}
            onChange={this.handleChange}
          />
          <br/>
          <Button variant='warning' type='submit' onClick={(event) => this.handleSubmit(event)}>
            Find Recipe</Button>
        </Form>
        <br/>


        {this.state.recipe ? (
          <Row >
            {this.state.recipe.map((recipe, index) => {
              return (
                <Col md='auto' className="mb-5">
                  <RecipeInfo recipe={recipe.recipe} id={index} addRecipe={this.addRecipe} />
                </Col>
              )
            })}
          </Row>) : (<></>)} 
      </>
    )
  }
}


export default Recipes;
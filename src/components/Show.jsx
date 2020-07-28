import React, { Component } from 'react'
import RecipeInfo from './RecipeInfo.jsx'

export default class Show extends Component {
  state = {
    recipeInfo : ''
  }

  componentDidMount() {
    this.setState({
      recipeInfo: JSON.parse(localStorage.getItem('searchResult'))[0]
    })
  }

  render() {
    return (
      <div>
        {/* <p> {this.state}</p> */}
      </div>
    )
  }
}
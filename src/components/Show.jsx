import React, { Component } from 'react'
import RecipeInfo from './RecipeInfo.jsx'

export default class Show extends Component {


  render() {
    return (
      <div>
        <p> {this.props}</p>
      </div>
    )
  }
}
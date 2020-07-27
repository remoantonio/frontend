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
      <>
        <Recipes toggleSearch={this.toggleSearch} data={this.state.data} searched={this.state.searched} />
      </>
    )
  }
}

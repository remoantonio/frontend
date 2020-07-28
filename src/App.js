import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import {Container, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SearchRecipes from './components/SearchRecipes'
import SavedRecipes from './components/SavedRecipes'
import Forms from './components/Forms.jsx'
import Recipes from './components/Recipes.jsx'
import Login from './components/Login.jsx'
import Login2 from './components/Login2'
import Show from './components/Show.jsx'
import ShowUser from './components/ShowUser.jsx'

let baseURL= process.env.REACT_APP_BASE_URL

class App extends React.Component {
  state = {
    userName: ''
  }
  setUser = this.setUser.bind(this)

  setUser(data) {
    this.setState({
      userName: data
    })
    console.log(data)
    localStorage.setItem('currentUser', data.userName)
    localStorage.setItem('token', data.accessToken)
  }
  
  addRecipes = (newRecipes) => {
  }

  render() {
    return (
      <Container fluid>
        <NavBar logout={this.logout} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/saved' component={SavedRecipes} />
          <Route exact path='/search' component={SearchRecipes} />
          <Route
            exact path='/login'
            render={(props) => (
              <Login {...props} setUser={this.setUser} />
            )} />
            <Route
            exact path='/login2'
            render={(props) => (
              <Login2 {...props} setUser={this.setUser} />
            )} />
          <Route exact path='/show/:id' component={Show} />
          <Route exact path='/showSaved/:id' component={ShowUser} />
          <Route component={Error} />
        </Switch>
      </Container>
    )
  }
}


// Researched on stackOverflow for a way to clear search parameters
// https://stackoverflow.com/questions/39128931/clear-localstorage-on-tab-browser-close-but-not-on-refresh
window.onbeforeunload = function (e) {

  window.localStorage.unloadTime = JSON.stringify(new Date());
  
  };
  
  window.onload = function () {
  
  let loadTime = new Date();
  let unloadTime = new Date(JSON.parse(window.localStorage.unloadTime));
  let refreshTime = loadTime.getTime() - unloadTime.getTime();
  
  if(refreshTime>3000)//3000 milliseconds
  {
  window.localStorage.clear();
  }
  
  };




export default App;

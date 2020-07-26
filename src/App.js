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
import Login from './components/Login'

let baseURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003';
} else {
  // "https://fathomless-sierra-68956.herokuapp.com" in this case is the *API* url
  baseURL = 'https://forkitbackend.herokuapp.com/';
}

class App extends React.Component {
  state = {
    userName: ''
  }
  setUser = this.setUser.bind(this)

  getRecipes = () => {
    fetch(baseURL + '/fork').then(res => {
      return res.json();
    }).then(data => {
      this.setState({
        userName: data.userName,
        password: data.password,
        password2: data.password2,
      });
    });
  }

  setUser(data) {
    this.setState({
      userName : data
    })
  }

  addRecipes = (newRecipes) => {
    // const copyRecipes = [...this.state.recipes];
    // copyRecipes.push(newRecipes);
    // this.setState({
    //   recipes: copyRecipes,

    //});
  }

  componentDidMount() {
    fetch(baseURL).then(res => {
      return res.json();
    }).then(data => {
      console.log(data)
      this.setState({
        userName: data
      })
    });
  }

  render() {
    return (
      <Container fluid>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/saved' component={SavedRecipes} />
          <Route exact path='/search' component={SearchRecipes} />
          <Route
            exact path='/login'
            render={(props) => (
              <Login {...props} setUser={this.setUser} baseURL = {baseURL} />
            )} />
          <Route component={Error} />
        </Switch>



        {/* <table>
          <tbody>
            {
              this.state.recipes.map(recipes => {
                return (
                  <tr key={ recipes._id }>
                    <td>{ recipes.name }</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table> */}
      </Container>
    )
  }
}







export default App;

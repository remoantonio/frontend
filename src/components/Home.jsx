import React from 'react'

import {Container, Button, Jumbotron } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
    return (

        <Jumbotron>
        <h1>Fork_It!</h1>
        <p>
        Welcome to Fork_It! Ever had ingredients but not sure what to cook using them? Or ever have multiple recipes for a meal and agonize over creating a compiled grocery list for everything? Look no further, Fork_It has the solution for you! Start exploring by clicking the button below
        </p>
        <p>
          <Button href= '/search' variant="warning">Start Search</Button>
        </p>
      </Jumbotron>
   
    

    )
}
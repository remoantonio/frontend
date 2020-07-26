import React from 'react'

import {Container, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
    return (
<Container fluid>
   <h3> Welcome to Fork_It! Ever had ingredients but not sure what to cook using them? Or ever have multiple recipes for a meal and agonize over creating a compiled grocery list for everything? Look no further, Fork_It has the solution for you! Start exploring by clicking the button below</h3>
   <Button variant="warning">Search Recipes</Button>
    
</Container>
    )
}
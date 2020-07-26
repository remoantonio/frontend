import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



export default function SavedRecipes({ data, setOrdered }) {
    return (
      <Card className="h-100 shadow-sm bg-white rounded">
        <Card.Img variant="top" src={data.image} />
        <Card.Body className="d-flex flex-column">
          <div className="d-flex mb-2 justify-content-between">
            <Card.Title className="mb-0 font-weight-bold">{data.label}</Card.Title>
          </div>
          <Card.Text className="text-secondary">{data.yield}</Card.Text>
          <Button
            onClick={() => setOrdered()}
            className="mt-auto font-weight-bold"
            variant="success"
            block
          >
            Show More
          </Button>
        </Card.Body>
      </Card>
    );
  }
  
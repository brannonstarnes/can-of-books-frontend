import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./css/bookComponent.css";

export default class Book extends Component {
  render() {
    return (
      <>
        <img
          width="50%"
          height="400px"
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1585862705417-671ae64f0eb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
          alt={this.props.book.title}
        />
        <Carousel.Caption>
          <h1>{this.props.book.title}</h1>
          <blockquote>
            <h2>{this.props.book.description}</h2>
          </blockquote>
          <h3>{this.props.book.status}</h3>
          <Button
            variant="secondary"
            onClick={() => this.props.deleteBooks(this.props.book._id)} //if you are trying to call a function in on click and need to pass a var, do this way
          >
            Delete Book
          </Button>
        </Carousel.Caption>
      </>
    );
  }
}

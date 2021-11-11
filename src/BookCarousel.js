import { Component } from "react";
import { Carousel } from "react-bootstrap";
import Book from "./Book.js";

export default class BookCarousel extends Component {
  render() {
    return (
      <Carousel>
        {this.props.books.map((book) => (
          <Carousel.Item key={book._id}>
            <Book book={book} deleteBooks={this.props.deleteBooks} />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

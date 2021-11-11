import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

export default class Book extends Component{
    render(){
        return(
            <>
            <img
      className="d-block w-100"
      src="https://thewritelife.com/wp-content/uploads/2019/08/How-to-format-a-book.jpg.webp"
      alt={this.props.book.title}
    />
    <Carousel.Caption>
      <h1>{this.props.book.title}</h1>
      <h2>{this.props.book.description}</h2>
      <h3>{this.props.book.status}</h3>
      <Button variant = "secondary" onClick={() => this.handleClick(this.props.deleteBooks._id)}>Delete Book</Button>
    </Carousel.Caption>
    </>
        )
    }
}
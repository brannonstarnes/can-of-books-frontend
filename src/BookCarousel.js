import { Component } from "react"
import { Carousel } from "react-bootstrap"

export default class BookCarousel extends Component {

    render() {
        return (
            <Carousel>


               {this.props.books.map(book => 
               <Carousel.Item key={book._id}>
                    <h2>{book.title}</h2>
                    <p>{book.description}</p>
                </Carousel.Item>)}
            </Carousel>
        )
    }



}
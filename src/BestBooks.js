import React from 'react';
import axios from 'axios';
import BookCarousel from './BookCarousel.js'
import Button from 'react-bootstrap/Button';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
 


  getBooks = async () => {
    let apiUrl= `${process.env.REACT_APP_SERVER_URL}/books?email=${this.props.user}`
    console.log(apiUrl);
     
try{
  const response = await axios.get(apiUrl);
  this.setState({ books: response.data });
  } catch (e){
    console.log(e);
  }
}

  /* DONE TODO: Make a GET request to your API to fetch books for the logged in user  */
  componentDidMount(){
    this.getBooks()
  };

  render() {

    /*DONE? TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <Button onClick={() => this.props.showModal()}>
          Add Book
        </Button>



        {this.state.books.length > 0 ? (
          <BookCarousel books={this.state.books}/>

        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;

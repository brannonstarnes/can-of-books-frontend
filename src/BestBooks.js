import React from "react";
import axios from "axios";
import BookCarousel from "./BookCarousel.js";
import Button from "react-bootstrap/Button";
import CreateBook from "./CreateBook.js";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      books: [],
    };
  }

  postBooks = async (newBookObj) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/books`;
    let res = await axios.post(url, newBookObj);
    this.setState({ books: [...this.state.books, res.data] });
  };

  deleteBooks = async (id) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/books/${id}?email=${this.state.user}`;
    //filteredArray checks all the user's books and keeps anything that DOES NOT have the matching id.
    let filteredArray = this.state.books.filter((book) => book._id !== id);
    try {
      await axios.delete(url);
      //updates state to only keep the filtered books
      this.setState({ books: filteredArray });
    } catch (e) {
      console.error(e);
    }
  };

  showModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  getBooks = async () => {
    let apiUrl = `${process.env.REACT_APP_SERVER_URL}/books?email=${this.props.user}`;
    console.log(apiUrl);
    try {
      const response = await axios.get(apiUrl);
      this.setState({ books: response.data });
    } catch (e) {
      console.log(e);
    }
  };

  /* DONE TODO: Make a GET request to your API to fetch books for the logged in user  */
  componentDidMount() {
    this.getBooks();
  }

  render() {
    /*DONE? TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <CreateBook
          postBooks={this.postBooks}
          show={this.state.show}
          closeModal={this.closeModal}
        />

        {this.state.books.length > 0 ? (
          <BookCarousel
            books={this.state.books}
            deleteBooks={this.deleteBooks}
          />
        ) : (
          <h3>No Books Found :(</h3>
        )}
        <Button onClick={() => this.showModal()}>Add Book</Button>
      </>
    );
  }
}

export default BestBooks;

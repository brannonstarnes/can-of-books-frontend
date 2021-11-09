import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  getBooks = async () => {
    let apiUrl= 'http://localhost:3001/books'
     
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

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <Carousel>
          {this.state.books.map((book) => 
              <Carousel.Item>
                  {/* <img style= {{margin: 'auto'}} alt='carousel item' src={``}/>  */}
                  <Carousel.Caption>
                  <div style={{overflow: 'scroll', height: '100px'}}>
                    <h3 style={{color: 'black'}}>{book.title}</h3>
                    <p style={{color: 'black'}}>{book.author}</p>
                  </div>
                  </Carousel.Caption> 
              </Carousel.Item>   
                )}
              </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;

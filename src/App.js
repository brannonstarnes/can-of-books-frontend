import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Profile.js";
import BestBooks from "./BestBooks.js";
import Login from "./Login.js";
import "./css/app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      username: "",
    };
  }
  async getBooks(location = null) {}

  //add books

  //delete books

  loginHandler = (email, name) => {
    this.setState({
      user: email,
    });
    this.setState({
      username: name,
    });
  };

  logoutHandler = () => {
    this.setState({
      user: null,
    });
  };

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {/*DONE TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {this.state.user ? (
                <BestBooks user={this.state.user} />
              ) : (
                <Login loginHandler={this.loginHandler} />
              )}
            </Route>
            <Route exact path="/profile">
              {this.state.user ? (
                <Profile
                  user={this.state.user}
                  username={this.state.username}
                />
              ) : (
                <Login loginHandler={this.loginHandler} />
              )}
            </Route>
            {/* <Route exact path='/createBooks'> */}
            {/* <CreateBook postBooks={this.postBooks} show={this.state.show} closeModal={this.closeModal}/> */}
            {/* </Route> */}
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;

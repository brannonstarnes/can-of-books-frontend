import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from './Profile.js';
import BestBooks from './BestBooks.js';
import Login from './Login.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      username: ""
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {/*DONE TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {this.state.user ?<BestBooks /> : <Login loginHandler={this.loginHandler} />}
            </Route>
            <Route exact path='/profile'>
              <Profile use={this.props.user} username={this.state.username} />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;

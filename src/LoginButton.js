//import { Component } from 'react'
import React from "react";
//import Button from 'react-bootstrap/Button';
//import LoginForm from './LoginForm.js'
import { useAuth0 } from '@autho0/auth0-react'

// export default class LoginButton extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       clicked: false,
//     }
//   }
//   }

  // handleClick = () => {
  //   this.setState({clicked: true})
  // }

  const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return <button onClick={() => loginWithRedirect()}>Log In</button>;
  };

  //render() {

    /*DONE TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
//     return  (
//     this.state.clicked === false ? <Button variant="primary" onClick={this.loginButton;}>Log In</Button> : <LoginForm loginHandler={this.props.loginHandler}/>
//     )
//   }

export default LoginButton;

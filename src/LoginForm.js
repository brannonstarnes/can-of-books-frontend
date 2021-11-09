import { Component } from "react";
import Form from 'react-bootstrap/Form';
import LoginButton from './LoginButton.js';

class LoginForm extends Component {

showForm = () => {
  
}


  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <Form>
  <Form.Group className="mb-3" >
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter Username" />
  </Form.Group>

  <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    <LoginButton /> 
</Form>
    );
  }
};

export default LoginForm;

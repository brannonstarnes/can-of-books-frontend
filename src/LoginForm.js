import { Component } from "react";
import Form from 'react-bootstrap/Form';

class LoginForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: '',
      username: ''
    }
  }
  
  // handleClick = () => {
  //   this.props.loginHandler(this.state.user, this.state.username);
  // }

  handleChange = (e) => {
    this.setState({user: e.target.value})
  }

  handleUserNameChange = (e) =>{
    this.setState({username: e.target.value})
  }

  render() {
    /* DONE TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" onChange={this.handleUserNameChange}/>
        </Form.Group>

        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} />
        <Form.Text className="text-muted">
           We'll never share your email with anyone else.
        </Form.Text>
    <button onClick={this.handleClick}>Log In</button>
</Form>
    );
  }
};

export default LoginForm;

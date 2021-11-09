import { Component } from 'react'
import Button from 'react-bootstrap/Button';
import LoginForm from './LoginForm.js'

export default class LoginButton extends Component {

  constructor(props){
    super(props);
    this.state = {
      clicked: false,
    }
  }

  handleClick = () => {
    this.setState({clicked: true})
  }

  render() {

    /*DONE TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
    return  (
    this.state.clicked === false ? <Button variant="primary" onClick={this.handleClick}>Log In</Button> : <LoginForm loginHandler={this.props.loginHandler}/>
    )
  }
}

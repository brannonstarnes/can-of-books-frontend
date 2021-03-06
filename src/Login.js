import React from "react";
import Card from "react-bootstrap/Card";
import LoginButton from "./LoginButton.js";
import "./css/Login.css";

class Login extends React.Component {
  render() {
    return (
      <Card
        border="dark"
        text="light"
        bg="secondary"
        style={{ width: "18rem" }}
      >
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>Click Below to Log In</Card.Text>
          {/*DONE TODO: add a `LoginButton` component here that will log the user in */}
          <LoginButton loginHandler={this.props.loginHandler} />
        </Card.Body>
      </Card>
    );
  }
}

export default Login;

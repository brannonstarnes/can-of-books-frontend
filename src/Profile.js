import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";

class Profile extends Component {
  render() {
    /* DONE TODO: render information about logged in user */

    /* STRETCH TODO: if no logged in user then redirect home */

    return  (
    <div>
      <p>Username: {this.props.auth0.username}</p>
      <p>Email: {this.props.auth0.user}</p>
    </div>
    )}
};

export default withAuth0(Profile);

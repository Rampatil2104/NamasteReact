import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //API call
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          loggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>Welcome to the About Page </h2>
        <UserClass name={"Ram Patil (class)"} location={"Sacramento CA"} />
      </div>
    );
  }
}
export default About;

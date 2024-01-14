import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Rampatil2104");
    const json = await data.json();

    this.setState({
      UserInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.UserInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:patil.ram4021@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

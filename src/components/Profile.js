import React, { Component } from 'react';

class Profile extends Component {
  state = {
    name: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.changingName(this.state.name, this.props.userId);
  }

  render() {
    return (
      <form className="profile" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input type="submit" value="Save" />
      </form>
    )
  }
}

export default Profile;

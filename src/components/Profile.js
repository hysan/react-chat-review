import React, { Component } from 'react';

class Profile extends Component {
  state = {
    name: this.props.name,
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateName(this.props.id, this.state.name);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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

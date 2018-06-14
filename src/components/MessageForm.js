import React, { Component } from 'react';

class MessageForm extends Component {
  state = {
    message: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      message: "",
    })
  }

  render() {
    return (
      <form className="messageForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <input type="submit" value="Send" />
      </form>
    )
  }
}

export default MessageForm;

import React, { Component } from 'react';

class MessageForm extends Component {
  state = {
    message: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
    this.props.iamtyping(this.state.message.length > 0, this.props.userId);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addMessage(this.state.message, this.props.userId);
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

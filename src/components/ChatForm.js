import React, { Component } from 'react';

class ChatForm extends Component {
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
    this.props.addMessage(this.state.message);
    this.setState({ message: "" });
  }

  render() {
    return (
      <form className="chatform" onSubmit={this.handleSubmit}>
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

export default ChatForm;

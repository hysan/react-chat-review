import React, { Component } from 'react';

class Message extends Component {
  state = {}

  render() {
    return (
      <p className="message">{this.props.text}</p>
    )
  }
}

export default Message;

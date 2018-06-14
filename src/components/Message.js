import React, { Component } from 'react';

class Message extends Component {
  state = {}

  render() {
    return (
      <p>{this.props.text}</p>
    )
  }
}

export default Message;

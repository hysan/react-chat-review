import React, { Component } from 'react';
import User from './User';

class ChatRoom extends Component {
  state = {}

  render() {
    return (
      <div className="chatroom">
        <User />
      </div>
    )
  }
}

export default ChatRoom;

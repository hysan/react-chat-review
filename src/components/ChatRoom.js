import React, { Component } from 'react';
import UUID from 'uuid';
import User from './User';

class ChatRoom extends Component {
  state = {
    users: [],
    log: [],
  }

  componentDidMount() {
    const users = [
      { id: UUID(), name: "Shun" },
      { id: UUID(), name: "Not Shun" },
    ];
    const log = [
      { id: UUID(), text: "hello", userId: users[0].id, timestamp: Date.now() + 1 },
      { id: UUID(), text: "world", userId: users[1].id, timestamp: Date.now() + 2 },
      { id: UUID(), text: "a", userId: users[1].id, timestamp: Date.now() + 3 },
      { id: UUID(), text: "b", userId: users[0].id, timestamp: Date.now() + 4 },
      { id: UUID(), text: "shun", userId: users[1].id, timestamp: Date.now() + 5 },
    ];

    this.setState({
      users,
      log,
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="chatroom">
        <User />
      </div>
    )
  }
}

export default ChatRoom;

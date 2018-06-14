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

  createMessage = (text, userId) => {
    return {
      id: UUID(),
      text,
      userId,
      timestamp: Date.now(),
    };
  }

  addMessage = (text, userId) => {
    // console.log('gonna add', text, userId)
    const log = [...this.state.log, this.createMessage(text, userId)];
    this.setState({ log });
  }

  renderUser = () => {
    return this.state.users.map(user => {
      return (
        <User
          key={user.id}
          {...user}
          log={this.state.log}
          addMessage={this.addMessage}
          users={this.state.users}
        />
      )
    })
  }

  render() {
    return (
      <div className="chatroom">
        { this.renderUser() }
      </div>
    )
  }
}

export default ChatRoom;

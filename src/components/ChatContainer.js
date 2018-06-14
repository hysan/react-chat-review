import React, { Component } from 'react';
import UUID from 'uuid';
import User from './User';

class ChatContainer extends Component {
  state = {
    users: [
      { id: UUID(), name: "A" },
      { id: UUID(), name: "B" },
    ],
    log: [
      // { id, user_id, message, timestamp }
    ],
  }

  componentDidMount() {
    const { users } = this.state;
    this.setState({
      log: [
        { id: UUID(), user_id: users[0].id, message: "A", timestamp: Date.now() + 10 },
        { id: UUID(), user_id: users[1].id, message: "B", timestamp: Date.now() + 20 },
        { id: UUID(), user_id: users[0].id, message: "C", timestamp: Date.now() + 30 },
        { id: UUID(), user_id: users[1].id, message: "D", timestamp: Date.now() + 40 },
      ]
    })
  }

  updateName = (id, name) => {
    let users = this.state.users.map(user => {
      if (user.id === id) {
        return { id, name }
      }
      return user;
    });

    this.setState({
      users
    })
  }

  addMessage = (userId, message) => {
    let log = [...this.state.log,
      { id: UUID(), user_id: userId, message, timestamp: Date.now() }
    ]

    this.setState({
      log
    })
  }

  renderUsers = () => {
    return this.state.users.map(user => {
      return (
        <User
          key={user.id}
          {...user}
          users={this.state.users}
          log={this.state.log}
          updateName={this.updateName}
          addMessage={this.addMessage}
        />
      )
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="chatContainer">
        {this.renderUsers()}
      </div>
    )
  }
}

export default ChatContainer;

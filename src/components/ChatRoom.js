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
      { id: UUID(), name: "Shun", isTyping: false },
      { id: UUID(), name: "Not Shun", isTyping: false },
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

  createUser = (name, id = null, isTyping = false) => {
    return { id: id ? id : UUID(), name, isTyping };
  }

  // really should be modifyUser
  changingName = (name, userId) => {
    const users = this.state.users.map(user => {
      if (user.id === userId) {
        return this.createUser(name, userId);
      }
      return user;
    })
    this.setState({ users });
  }

  findMessage = (id) => {
    return this.state.log.find(msg => msg.id === id)
  }

  deleteMessage = (id) => {
    // const message = this.findMessage(id);
    const log = this.state.log.filter(msg => msg.id !== id);
    this.setState({ log });
  }

  iamtyping = (isTyping, userId) => {
    const users = this.state.users.map(user => {
      if (user.id === userId) {
        return this.createUser(user.name, userId, isTyping);
      }
      return user;
    })
    this.setState({ users });
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
          changingName={this.changingName}
          deleteMessage={this.deleteMessage}
          iamtyping={this.iamtyping}
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

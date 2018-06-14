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
      // { user_id, message, timestamp }
    ],
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

  renderUsers = () => {
    return this.state.users.map(user => {
      return (
        <User
          key={user.id}
          {...user}
          users={this.state.users}
          log={this.state.log}
          updateName={this.updateName}
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

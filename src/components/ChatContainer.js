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

  renderUsers = () => {
    return this.state.users.map(user => {
      return (
        <User
          key={user.id}
          {...user}
          log={this.state.log}
        />
      )
    })
  }

  render() {
    return (
      <div className="chatContainer">
        {this.renderUsers()}
      </div>
    )
  }
}

export default ChatContainer;

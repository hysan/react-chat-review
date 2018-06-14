import React, { Component } from 'react';

class Message extends Component {
  state = {
    hideDeleteButton: true,
  }

  toggleDeleteButton = () => {
    this.setState(prevState => {
      return { hideDeleteButton: !prevState.hideDeleteButton }
    });
  }

  render() {
    const deleteButton = this.state.hideDeleteButton || <button onClick={this.deleteMe}>Delete</button>;

    return (
      <div onClick={this.toggleDeleteButton} className="message">
        <p className="text">{this.props.text}</p>
        { deleteButton }
        {/* this.state.hideDeleteButton ?
            null
          :
          <button onClick={this.deleteMe}>Delete</button>
        */}
      </div>
    )
  }
}

export default Message;

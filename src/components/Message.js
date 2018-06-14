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

  deleteMe = () => {
    this.props.deleteMessage(this.props.id);
  }

  renderDeleteButton = () => {
    return <button onClick={this.deleteMe}>Delete</button>
  }

  render() {
    const deleteButton = this.state.hideDeleteButton || this.renderDeleteButton();

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

import React from 'react';
import Avatar from './Avatar';
import Message from './Message';

const MessageContainer = (props) => {
  return (
    <div className="messageContainer">
      <Avatar />
      <Message />
    </div>
  )
}

export default MessageContainer;

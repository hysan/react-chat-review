import React from 'react';
import Avatar from './Avatar';
import Message from './Message';

const MessageContainer = (props) => {
  const { message, user } = props;
  console.log("message", message);
  return (
    <div className="messageContainer">
      <Avatar user={user.name} />
      <Message text={message.message} />
    </div>
  )
}

export default MessageContainer;

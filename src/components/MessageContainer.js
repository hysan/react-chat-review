import React from 'react';
import Avatar from './Avatar';
import Message from './Message';

const MessageContainer = (props) => {
  console.log(props);
  return (
    <div className="messageContainer">
      <Avatar name={props.userName} />
      <Message text={props.text} />
    </div>
  )
}

export default MessageContainer;

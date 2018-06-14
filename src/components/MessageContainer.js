import React from 'react';
import Avatar from './Avatar';
import Message from './Message';

const MessageContainer = (props) => {
  console.log("MessageContainer", props);
  return (
    <div className="messageContainer">
      <Avatar name={props.userName} />
      <Message id={props.id} text={props.text} deleteMessage={props.deleteMessage} />
    </div>
  )
}

export default MessageContainer;

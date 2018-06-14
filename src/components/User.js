import React from 'react';
import ChatLog from  './ChatLog';
import MessageForm from './MessageForm';

const User = (props) => {
  return (
    <div className="user">
      <ChatLog log={props.log} />
      <MessageForm />
    </div>
  )
}

export default User;

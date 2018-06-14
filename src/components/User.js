import React from 'react';
import ChatLog from  './ChatLog';
import MessageForm from './MessageForm';

const User = (props) => {
  // console.log("User", props)
  return (
    <div className="user">
      <ChatLog log={props.log} users={props.users} />
      <MessageForm addMessage={props.addMessage} userId={props.id} />
    </div>
  )
}

export default User;

import React from 'react';
import Profile from './Profile';
import ChatLog from  './ChatLog';
import MessageForm from './MessageForm';

const User = (props) => {
  // console.log("User", props)
  return (
    <div className="user">
      <Profile />
      <ChatLog log={props.log} users={props.users} />
      <MessageForm addMessage={props.addMessage} userId={props.id} />
    </div>
  )
}

export default User;

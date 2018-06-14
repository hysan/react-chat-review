import React from 'react';
import Profile from './Profile';
import ChatLog from './ChatLog';
import ChatForm from './ChatForm';

const User = (props) => {
  return (
    <div className="user">
      <Profile />
      <ChatLog />
      <ChatForm />
    </div>
  )
}

export default User;

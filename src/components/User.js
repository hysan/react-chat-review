import React from 'react';
import Profile from './Profile';
import ChatLog from './ChatLog';
import ChatForm from './ChatForm';

const User = (props) => {
  const { id, name, users, log, updateName, addMessage } = props;
  console.log(props)
  return (
    <div className="user">
      <Profile id={id} name={name} updateName={updateName} />
      <ChatLog log={log} />
      <ChatForm addMessage={addMessage} />
    </div>
  )
}

export default User;

import React from 'react';
import Profile from './Profile';
import ChatLog from  './ChatLog';
import MessageForm from './MessageForm';

const User = (props) => {
  // console.log("User", props)
  const someoneIsTyping = props.users.find(user => user.id !== props.id && user.isTyping);
  return (
    <div className="user">
      <Profile changingName={props.changingName} userId={props.id} />
      <ChatLog log={props.log} users={props.users} deleteMessage={props.deleteMessage} someoneIsTyping={!!someoneIsTyping} />
      <MessageForm addMessage={props.addMessage} userId={props.id} iamtyping={props.iamtyping} />
    </div>
  )
}

export default User;

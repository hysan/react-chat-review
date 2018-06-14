import React from 'react';
import MessageContainer from './MessageContainer';

const ChatLog = (props) => {
  const { log, users } = props;
  return (
    <div className="chatlog">
      {log.map(message => {
        let user = users.find(user => user.id === message.user_id);
        return <MessageContainer key={message.id} message={message} user={user} />
      })}
    </div>
  )
}

export default ChatLog;

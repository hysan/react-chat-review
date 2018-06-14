import React from 'react';
import MessageContainer from './MessageContainer';

const ChatLog = (props) => {
  const { log } = props;
  return (
    <div className="chatlog">
      {log.map(message => {
        return <MessageContainer key={message.id} message={message} />
      })}
    </div>
  )
}

export default ChatLog;

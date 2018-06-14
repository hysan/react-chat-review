import React from 'react';
import MessageContainer from './MessageContainer';

const ChatLog = (props) => {
  return (
    <div className="chatlog">
      {props.log.sort((a, b) => a.timestamp - b.timestamp)
        .map(msg => <MessageContainer key={msg.id} {...msg} />)}
    </div>
  )
}

export default ChatLog;

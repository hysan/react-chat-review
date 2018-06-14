import React from 'react';
import MessageContainer from './MessageContainer';

const ChatLog = (props) => {
  return (
    <div className="chatlog">
      {props.log.map(msg => <MessageContainer key={msg.id} {...msg} />)}
    </div>
  )
}

export default ChatLog;

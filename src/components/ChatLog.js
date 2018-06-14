import React from 'react';
import MessageContainer from './MessageContainer';

const ChatLog = (props) => {
  return (
    <div className="chatlog">
      {props.log
        .sort((a, b) => a.timestamp - b.timestamp)
        .map(msg => {
          const userName = props.users.find(user => msg.userId === user.id).name;
          // console.log('find user', props.users.find(user => msg.userId === user.id))
          // console.log('userName', userName)
          return (
            <MessageContainer
              key={msg.id}
              {...msg}
              userName={userName}
              deleteMessage={props.deleteMessage}
            />
          )
        })}
    </div>
  )
}

export default ChatLog;

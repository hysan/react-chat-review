import React from 'react';
import ChatLog from  './ChatLog';

const User = (props) => {
  return (
    <div className="user">
      <ChatLog log={props.log} />

    </div>
  )
}

export default User;

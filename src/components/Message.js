import React from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <p className="text">{props.text}</p>
    </div>
  )
}

export default Message;

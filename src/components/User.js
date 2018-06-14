import React from 'react';

const User = (props) => {
  console.log('hjello')
  return (
    <div className="user">
      <p>{JSON.stringify(props)}</p>
    </div>
  )
}

export default User;

import React from 'react';
import socket from '../socket';
function JoinPage() {
  return (
    <div className='join-block'>
      <input placeholder='ID Room' type='text' />
      <input placeholder='Your Name or Nickname' type='text' />
      <button className='btn btn-success'>Sign in</button>
    </div>
  )
}
export default JoinPage
import React, { useState } from 'react';
import axios from 'axios'
import socket from '../socket';
function JoinPage({ onLogin }) {
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  const [isLoading, setLoading] = useState(false);
  const onEnter = async () => {
    if (!roomId || !userName) {
      return alert('Please write the correct data');
    }
    setLoading(true)
    const obj = {
      roomId,
      userName
    }
    await axios.post('/rooms', obj)
    onabort(obj);

  }
  return (
    <div className='join-block'>
      <input placeholder='ID Room' type='text' value={roomId} onChange={e => setRoomId(e.target.value)} />
      <input placeholder='Your Name or Nickname' type='text' value={userName} onChange={e => setUserName(e.target.value)} />
      <button disabled={isLoading} onClick={onEnter} className='btn btn-success'>{isLoading ? 'SignIn...' : 'Sign in'}</button>
    </div>
  )
}
export default JoinPage



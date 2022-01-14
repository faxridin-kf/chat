import React from 'react';
import { JoinPage } from './components';
import io from 'socket.io-client';
const socket = io('http://localhost:5555');
function App() {
  return (
    <div className='wrapper'>
      <JoinPage />
    </div>
  );
}

export default App;

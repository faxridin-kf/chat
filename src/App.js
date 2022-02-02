import React, { useReducer } from 'react';
import { JoinPage } from './components';
import reducer from './components/reducer'
import socket from './socket'

function App() {
  const [state, dispatch] = useReducer(reducer, {
    joined: false,
    roomId: null,
    userName: null,
    users: [],
    messages: [],
  });
  const onLogin = (obj) => {
    dispatch({
      type: 'JOINED',
      payload: obj
    });
    socket.emit('ROOM:JOIN', obj)
  }

  const setUsers = (users) => {
    dispatch({
      type: 'SET_USERS',
      payload: users,
    })
  }

  React.useEffect(() => {
    socket.on('ROOM:SET_USERS', setUsers)
  }, [])
  window.socket = socket;
  console.log(state)

  return (
    <div className='wrapper'>
      {/* {!state.isAuth ? <JoinPage onLogin={onLogin} /> : <Chat/ {...state}>} */}
      <JoinPage onLogin={onLogin} />
    </div>
  );
}

export default App;




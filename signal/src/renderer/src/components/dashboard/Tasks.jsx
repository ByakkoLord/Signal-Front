import React, { useState, useEffect, useRef, useContext } from 'react';
import { AppContext } from '../../../contexts/ClientContext';


import delete_icon from '../../assets/delete.png';
import checked from '../../assets/checked.png';

export default function Tasks({ type, task }) {
  const { socket } = useContext(AppContext);
  
  if (!task) return null;
  
  const [color, setColor] = useState('');
  const [ id, setId ] = useState();

  const isoDate = task.end_date
  const date = new Date(isoDate);

  

  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);



  useEffect(() => {
  if (type === 'first') {
    setColor('linear-gradient(135deg, #941A1A, #ef5c5c)');
  } else if (type === 'second') {
    setColor('linear-gradient(135deg, #7D5175, #E392D4)');
  } else if (type === 'third') {
    console.log('third');
    setColor('linear-gradient(135deg, #1A4B94, #5C8EF5)');
  }
  setId(task.id);
  console.log('Task ID:', task.id);

  
}, [type]);


  return (
    <div
      className="tasks"
      style={{
        background: color,
        padding: '20px',
        borderRadius: '10px',
        width: '100%',
        maxWidth: '500px',
        color: 'white',
        userSelect: 'none',
        transition: 'left 0.3s ease, top 0.3s ease',
      }}
    >
      <h1
        style={{
          alignSelf: 'flex-start',
          fontSize: '1.5rem',
          fontWeight: 'bolder',
          textAlign: 'center',
          fontFamily: 'Poppins-regular',
          marginBottom: '10px',
        }}
      >
        {task.title}
      </h1>
      <div style={{ width: '100%', height: 2, backgroundColor: 'white', marginBottom: 10, alignSelf: 'stretch' }} />
      <h2 style={{ fontSize: '1rem', fontWeight: 'normal', alignSelf: 'flex-start' }}>{task.users}</h2>
      <h2 style={{ fontSize: '1rem', fontWeight: 'normal', alignSelf: 'flex-start' }}>{task.client}</h2>
      <h3 style={{ fontSize: '0.8rem', marginTop: 10, alignSelf: 'flex-start' }}>{formattedDate}</h3>
      <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: 20, width: '100%', gap: 20 }}>
        <img style={{ width: '20px', height: '20px', cursor: 'pointer' }} src={checked} alt="" />
        <img onClick={() => {socket.emit('deleteTask', { id });}} style={{ width: '20px', height: '20px', cursor: 'pointer' }} src={delete_icon} alt="" />
      </div>
    </div>
  );
}

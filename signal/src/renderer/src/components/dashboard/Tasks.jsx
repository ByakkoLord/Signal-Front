import React, { useState, useEffect, useRef, useContext } from 'react';
import { AppContext } from '../../../contexts/ClientContext';

export default function Tasks({ type, task }) {
  
  if (!task) return null;

  const { setIsDraggingContext } = useContext(AppContext);
  const boxRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });
  const [initialPos, setInitialPos] = useState({ x: 100, y: 100 });
  const [color, setColor] = useState('');


  let isDragging = false
  useEffect(() => {
  const box = boxRef.current;
  if (!box) return;
  
  const rect = box.getBoundingClientRect();
  setInitialPos({ x: rect.left, y: rect.top });
}, []); // executa só uma vez

  useEffect(() => {
  if (type === 'first') {
    setColor('linear-gradient(135deg, #941A1A, #ef5c5c)');
  } else if (type === 'second') {
    setColor('linear-gradient(135deg, #7D5175, #E392D4)');
  }

  const box = boxRef.current;
  if (!box) return;

  const onMouseDown = (e) => {
    isDragging = true;
    setIsDraggingContext(true);
    box.classList.add('draggable-box');
    box.style.transition = 'none';
    offset.current = {
      x: e.clientX - box.getBoundingClientRect().left,
      y: e.clientY - box.getBoundingClientRect().top,
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    box.style.left = `${e.clientX - offset.current.x}px`;
    box.style.top = `${e.clientY - offset.current.y}px`;
  };

  const onMouseUp = () => {
    isDragging = false;
    setIsDraggingContext(false);
    box.classList.remove('draggable-box');
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    box.style.transition = 'left 0.3s ease, top 0.3s ease';
    box.style.left = `${initialPos.x}px`;
    box.style.top = `${initialPos.y}px`;
  };

  box.addEventListener('mousedown', onMouseDown);

  return () => {
    box.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };
}, [type, isDragging, initialPos]);


  return (
    <div
      ref={boxRef}
      className="tasks"
      style={{
        left: `${initialPos.x}px`,
        top: `${initialPos.y}px`,
        background: color,
        padding: '20px',
        borderRadius: '10px',
        width: '100%',
        maxWidth: '500px',
        color: 'white',
        userSelect: 'none',
        transition: 'left 0.3s ease, top 0.3s ease',
        cursor: 'move',
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
      <h2 style={{ fontSize: '1rem', fontWeight: 'normal', alignSelf: 'flex-start' }}>{task.user}</h2>
      <h2 style={{ fontSize: '1rem', fontWeight: 'normal', alignSelf: 'flex-start' }}>{task.client}</h2>
      <h3 style={{ fontSize: '0.8rem', marginTop: 10, alignSelf: 'flex-start' }}>Agendado: 23/06 - 10:00</h3>
    </div>
  );
}

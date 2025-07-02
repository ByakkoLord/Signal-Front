import React, { useState, useEffect, useRef } from 'react';

export default function Tasks({ type, task }) {
  if (!task) return null;

  const boxRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });
  const [initialPos, setInitialPos] = useState({ x: 100, y: 100 });
  const [color, setColor] = useState('');

  useEffect(() => {
    if (type === 'first') {
      setColor('linear-gradient(135deg, #941A1A, #ef5c5c)');
    } else if (type === 'second') {
      setColor('linear-gradient(135deg, #7D5175, #E392D4)');
    }

    const box = boxRef.current;
    if (!box) return;

    // Posição inicial salva
    const rect = box.getBoundingClientRect();
    setInitialPos({ x: rect.left, y: rect.top });

    let isDragging = false;

    const onMouseDown = (e) => {
      isDragging = true;
      box.classList.add('draggable-box');
      box.style.transition = 'none'; // sem transição durante arraste
      offset.current = {
        x: e.clientX - box.getBoundingClientRect().left,
        y: e.clientY - box.getBoundingClientRect().top,
      };
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
        box.style.left = `${e.clientX}px`;
      box.style.top = `${e.clientY}px`;
    };

    const onMouseUp = () => {
      isDragging = false;
      box.classList.remove('draggable-box');
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      box.style.transition = 'left 0.3s ease, top 0.3s ease'; // ativa transição
      box.style.left = `${initialPos.x}px`;
      box.style.top = `${initialPos.y}px`;
      setInitialPos({ x: initialPos.x, y: initialPos.y });
      console.log(initialPos); // atualiza posição inicial
      console.log(offset.current); // mostra o offset atual
      
    };

    box.addEventListener('mousedown', onMouseDown);

    return () => {
      box.removeEventListener('mousedown', onMouseDown);
    };
  }, [type]);

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
        width: '250px',
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

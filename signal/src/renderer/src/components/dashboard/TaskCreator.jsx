import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

export default function TaskCreator() {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const newSocket = io('http://26.73.113.96:3000');
    setSocket(newSocket);

    // Ao conectar, escutar mensagens
    newSocket.on('message', (data) => {
      console.log('Message received:', data);
      setMessage(data);
    });

    // Teste opcional: envia uma mensagem ao conectar
    newSocket.emit('mensagem', 'Cliente conectado e enviando mensagem de teste');

    // Cleanup: desconectar quando o componente desmonta
    return () => {
      newSocket.disconnect();
      console.log('Socket desconectado');
    };
  }, []);

  return (
    <div className="task-creator" style={{ position: 'fixed', bottom: '80px', right: '20px', backgroundColor: 'rgba(76, 59, 141, 0.8)', padding: '20px', borderRadius: '10px', width: '300px' }}>
      <h1 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bolder', textAlign: 'center', fontFamily: 'Poppins-regular' }}>
        Criar Tarefa
      </h1>
      <div style={{ width: '100%', height: 2, backgroundColor: 'white', marginBottom: 10 }} />
      <input
        type="text"
        placeholder="Título da tarefa"
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '10px',
          outline: 'none',
          backgroundColor: 'rgba(72, 72, 72, 0.8)',
          border: 'none',
          color: 'white'
        }}
      />
      <textarea
        placeholder="Descrição da tarefa"
        style={{
          resize: "none",
          height: '100px',
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '10px',
          outline: 'none',
          backgroundColor: 'rgba(72, 72, 72, 0.8)',
          border: 'none',
          color: 'white'
        }}
      />
      <button
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          backgroundColor: '#4CAF50',
          color: 'white'
        }}
      >
        Criar
      </button>

      {/* Mostrando a última mensagem recebida */}
      <p style={{ color: 'white', marginTop: '10px' }}>Servidor diz: {message}</p>
    </div>
  );
}

import React, { useState, useEffect, useRef, useContext } from 'react'
import classNames from 'classnames'
import { AppContext } from '../../../contexts/ClientContext'

import delete_icon from '../../assets/delete.png'
import checked from '../../assets/checked.png'

export default function Tasks({ type, task }) {
  const { socket } = useContext(AppContext)

  if (!task) return null

  const [color, setColor] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [finTask, setFinTask] = useState(false)
  const [id, setId] = useState()
  const [hover, setHover] = useState(false)

  const isoDate = task.end_date
  const date = new Date(isoDate)

  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date)

  useEffect(() => {
    if (type === 'first') {
      setColor('linear-gradient(135deg, #941A1A, #ef5c5c)')
    } else if (type === 'second') {
      setColor('linear-gradient(135deg, #7D5175, #E392D4)')
    } else if (type === 'third') {
      console.log('third')
      setColor('linear-gradient(135deg, #1A4B94, #5C8EF5)')
    } else if (type === 'checked') {
      setColor('linear-gradient(135deg, #1A941A, #5C8EF5)')
    }
    setId(task.id)
    console.log('Task ID:', task.id)
  }, [type])

  return (
    <div
      className={classNames('tasks', { deleting, finTask })}
      style={{
        background: color,
        padding: '20px',
        borderRadius: '10px',
        width: '100%',
        maxWidth: '500px',
        color: 'white',
        userSelect: 'none',
        transition: 'left 0.3s ease, top 0.3s ease',
        transform: hover ? 'scale(1.05)' : 'scale(1)',
        cursor: 'pointer'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'relative',

          marginBottom: '10px'
        }}
      >
        <div
          style={{
            display: 'inline-block',
            // paddingLeft: '100%',
            animation: hover ? 'marquee 2s linear infinite' : 'none'
          }}
        >
          <h1
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bolder',
              textAlign: 'center',
              fontFamily: 'Poppins-regular',
              color: 'white',
              display: 'inline-block',
              margin: 0
            }}
          >
            {task.title}
          </h1>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          height: 2,
          backgroundColor: 'white',
          marginBottom: 10,
          alignSelf: 'stretch'
        }}
      />
      <h2 style={{ fontSize: '1rem', fontWeight: 'normal', alignSelf: 'flex-start' }}>
        {task.client}
      </h2>
      <p
        style={{
          maxHeight: hover ? '100px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease'
        }}
      >
        {task.description}
      </p>

      <h3 style={{ fontSize: '0.8rem', marginTop: 10, alignSelf: 'flex-start' }}>
        {formattedDate}
      </h3>
      <h2 style={{ fontSize: '0.8rem', alignSelf: 'flex-start' }}>Criado por {task.created_by}</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 20,
          width: '100%',
          gap: 20
        }}
      >
        <img
          onClick={() => {
            setTimeout(() => {
              socket.emit('updateTask', { id })
            }, 1000)
            setFinTask(true)
          }}
          style={{ width: '20px', height: '20px', cursor: 'pointer' }}
          src={checked}
          alt=""
        />
        <img
          onClick={() => {
            setTimeout(() => {
              socket.emit('deleteTask', { id })
            }, 1000)
            setDeleting(true)
          }}
          style={{ width: '20px', height: '20px', cursor: 'pointer' }}
          src={delete_icon}
          alt=""
        />
      </div>
    </div>
  )
}

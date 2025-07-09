import React, { useEffect, useContext, useRef } from 'react'
import { AppContext } from '../../contexts/ClientContext'
import TaskCreator from './dashboard/TaskCreator'

import PriorityBoard from './dashboard/PriorityBoard'
import SecondaryBoard from './dashboard/SecondaryBoard'
import LastBoard from './dashboard/LastBoard'
import plus from '../assets/plus.png'

export default function Dashboard() {
  const [openTaskCreator, setOpenTaskCreator] = React.useState(false)
  const { setCreatorState } = useContext(AppContext)

  const handleTaskCreatorToggle = () => {
    if (openTaskCreator) {
      setTimeout(() => {
        setOpenTaskCreator(false)
      }, 1000)
      setCreatorState(false)
    } else if (!openTaskCreator) {
      setCreatorState(true)
      setOpenTaskCreator(true)
    }
  }

  return (
    <div className="rep-screen">
      <button
        className="task-creator-button"
        style={{
          userSelect: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          border: 'none',
          width: '50px',
          height: '50px',
          marginTop: '20px',
          padding: '10px',
          borderRadius: '50%',
          backgroundColor: '#4CAF50',
          color: 'white',
          cursor: 'pointer'
        }}
        onClick={() => {
          handleTaskCreatorToggle()
          if (!openTaskCreator) {
            setCreatorState(true)
          } else setCreatorState(false)
        }}
      >
        <img width={37} height={37} src={plus} alt="" />
      </button>
      {openTaskCreator && <TaskCreator />}
    </div>
  )
}

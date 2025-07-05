import React, { useEffect, useContext } from 'react'
import { AppContext } from '../../contexts/ClientContext'
import TaskCreator from './dashboard/TaskCreator'

import PriorityBoard from './dashboard/PriorityBoard'
import SecondaryBoard from './dashboard/SecondaryBoard'
import LastBoard from './dashboard/LastBoard'

import plus from '../assets/plus.png'
import deleteIcon from '../assets/delete.png'

export default function Dashboard() {
  const [openTaskCreator, setOpenTaskCreator] = React.useState(false)
  const { isDraggingContext } = useContext(AppContext)

  useEffect(() => {}, [])

  return (
    <div className="dashboard">
      <PriorityBoard type="first" />
      <SecondaryBoard type="second" />
      <LastBoard type="third" />
      <button
        style={{
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
          cursor: 'pointer',
        }}
        onClick={() => setOpenTaskCreator(!openTaskCreator)}
      >
        <img width={37} height={37} src={plus} alt="" />
      </button>
      {isDraggingContext && (
        <div className='delete-hover' style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000, width: '300px', height: '200px', borderWidth: 2, borderColor: "white", borderStyle: 'solid', borderRadius: '10px', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '20px', color: 'white', fontFamily: 'Poppins-regular', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease' }}>
        <img width={50} src={deleteIcon} alt="" />
      </div>
      )}
      {openTaskCreator && <TaskCreator />}
    </div>
  )
}

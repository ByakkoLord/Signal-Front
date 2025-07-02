import React, { useEffect } from 'react'
import TaskCreator from './dashboard/TaskCreator'

import PriorityBoard from './dashboard/PriorityBoard'
import SecondaryBoard from './dashboard/SecondaryBoard'
import LastBoard from './dashboard/LastBoard'

export default function Dashboard() {
  const [openTaskCreator, setOpenTaskCreator] = React.useState(false)

  useEffect(() => {}, [])

  return (
    <div className="dashboard">
      <PriorityBoard type="first" />
      <SecondaryBoard type="second" />
      <LastBoard type="third" />
      <button
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          marginTop: '20px',
          padding: '10px',
          borderRadius: '5px',
          backgroundColor: '#4CAF50',
          color: 'white'
        }}
        onClick={() => setOpenTaskCreator(!openTaskCreator)}
      >
        Toggle Task Creator
      </button>
      {openTaskCreator && <TaskCreator />}
    </div>
  )
}

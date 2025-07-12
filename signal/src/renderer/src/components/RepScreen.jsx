import React, { useEffect, useContext, useRef } from 'react'
import { AppContext } from '../../contexts/ClientContext'
import Reps from './repscreen/Reps'
import Search from './repscreen/Search'
import RepCreator from './repscreen/RepCreator'



export default function Dashboard() {
  const { creatorState ,setCreatorState } = useContext(AppContext)

  return (
    <div className="rep-screen">
      <Search />
      <div className='teste' style={{ display: 'flex', flexDirection: 'column', gap: 100, overflowY: 'auto', maxHeight: '80vh' }}>

      <Reps />
      <Reps />
      </div>
      {creatorState && (<RepCreator />)}
    </div>
  )
}

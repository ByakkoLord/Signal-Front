import addBox from '../../assets/repsImages/addBox.png'
import pen from '../../assets/repsImages/pen.png'
import { AppContext } from '../../../contexts/ClientContext'
import React, { useContext } from 'react'

export default function Search() {
  const { setCreatorState } = useContext(AppContext)

  return (
    <div className="search">
      <input type="text" placeholder="Search..." />
      <button
        style={{ width: 40, height: 40, borderRadius: 10, border: 'none', cursor: 'pointer' }}
        onClick={() => setCreatorState(true)}
      >
        <img width={20} height={20} src={addBox} alt="Search" />
      </button>
      <button
        style={{ width: 40, height: 40, borderRadius: 10, border: 'none', cursor: 'pointer' }}
      >
        <img width={20} height={20} src={pen} alt="Search" />
      </button>
    </div>
  )
}

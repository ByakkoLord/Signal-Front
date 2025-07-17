import addBox from '../../assets/repsImages/addBox.png'
import pen from '../../assets/repsImages/pen.png'
import { AppContext } from '../../../contexts/ClientContext'
import React, { useContext } from 'react'

export default function Search() {
  const { setCreatorState, setSearchTerm } = useContext(AppContext)

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Digite o número de série do REP"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        style={{ width: 40, height: 40, borderRadius: 10, border: 'none', cursor: 'pointer' }}
        onClick={() => setCreatorState(true)}
      >
        <img width={20} height={20} src={addBox} alt="Search" />
      </button>
    </div>
  )
}

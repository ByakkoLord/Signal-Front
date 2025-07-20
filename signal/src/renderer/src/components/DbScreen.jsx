import React, { useContext } from 'react'
import { useAppContext } from '../../contexts/ClientContext'
import DbItens from './dbscreen/DbItem'

export default function DbScreen() {
  const { sidebarSelected, setSidebarSelected } = useAppContext()

  return (
    <div className="db-screen">
                <DbItens />
    </div>
  )
}

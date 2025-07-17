import React, { useEffect, useState } from 'react'

export default function Message({ message, error }) {
    const bgColor = error ? 'rgba(195, 33, 33, 0.8)' : 'rgba(33, 130, 195, 0.8)'
  return (
    <div style={{ backgroundColor: bgColor }} className="message">
      <p>{message}</p>
    </div>
  )
}

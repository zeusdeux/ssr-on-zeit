import React from 'react'

export default function Box({ color }) {
  return <div className={`box ${color}`}><span>{color}</span></div>
}

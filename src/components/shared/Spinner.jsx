import React from 'react'
import stopwatch from '../assets/Stopwatch.gif'

function Spinner() {
  return <img 
  src={stopwatch} 
  alt='Loading...'
  style={{width: '100px', margin: 'auto', display: 'block'}}/>
}

export default Spinner
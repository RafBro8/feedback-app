import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
// import PropTypes from 'prop-types'

function Header() {
    const headerStyles = {
        backgroundColor: 'rgba(0,0,0,0.4',
        color: '#ff6a95'
    }

    const { text } = useContext(FeedbackContext)
    
  return (
    <header style={headerStyles}>
    <div className='container'>
    <h2>{text}</h2>
    </div>
    </header>
  )
}

export default Header


// Header.defaultProps = {
//     text: 'Feedback UI',
//     bgColor: 'blue',
//     textColor: 'yellow'
// }

// Header.propTypes = {
//     text: PropTypes.string,
//     bgColor: PropTypes.string,
//     textColor: PropTypes.string
// }

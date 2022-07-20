import React from 'react'
import PropTypes from 'prop-types';

function Card({children, reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
    // conditional styling
    // <div className='card' style={{
    //     backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
    //     color: reverse ? '#fff' : 'rgba(0,0,0,0.4)'
    // }}>
    // {children}
    // </div>
  )
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}
// Card is a reusable Style component
// {children} passed in are the <div></div> from FeedbackItem and other components
// {`card ${reverse && 'reverse'}` is a conditional checking if reverse is true or not

export default Card
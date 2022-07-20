import React from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import {useState} from 'react'
import PropTypes from 'prop-types';
import Card from './shared/Card';
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';


function FeedbackItem({item}) {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  // {item} is props passed to this Component from Feedback List comp

  // to change State always need to call set method of state, ex: setRating
  // const [rating, setRating] = useState(7)
  // const [text, setText] = useState('This is an example of a feedback item')

  // const handleClick = () => {
  //   // setRating(10) 
  //   // prev is a previous State value
  //   setRating((prev) => {
  //     return prev + 1;
  //   })
  // }

  // const handleClick = (id) => {
  //   console.log(id);
  // }
  // handleDelete comes from App.js -> FeedbackList - Prop drilling concept
  // later on when using Context API we eliminate need for Prop drilling because
  // we will bring State directly to Component

  return (

    // <div className='card'>
    //   <div className='num-display'>{item.rating}</div>
    //   <div className='text-display'>{item.text}</div>
    // </div>
    // created custom Card comp 
    <Card>
       <div className='num-display'>{item.rating}</div>
       <button onClick={() => deleteFeedback(item.id)} className='close'>
       <FaTimes color='purple'/>
       </button>
       <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='blue'/>
       </button>
       <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  
}
// rfce shortcut to setup functional Component body


export default FeedbackItem
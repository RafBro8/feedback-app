import { createContext, useState } from "react";
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1',
            rating: 5
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 8
        },
        {
            id: 3,
            text: 'This is feedback item 3',
            rating: 10
        }
    ])

    const [text, setText] = useState('Feedback UI');

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
}

// Set item to be updated
    const editFeedback = (item) => {
    setFeedbackEdit({
        item: item,
        edit: true
    })
}

// Update feedback item
const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? 
    { ...item, ...updItem} : item))
}

    
// value = {{}} is any state or methods we want to pass    
    return <FeedbackContext.Provider value={{
        feedback: feedback,
        text: text,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
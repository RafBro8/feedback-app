import React, { useState } from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FeedbackForm from "./components/FeedbackForm"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import AboutPage from "./components/AboutPage"
import AboutIconLink from "./components/AboutIconLink"
import {FeedbackProvider} from './context/FeedbackContext'

function App() {

    // state moved to Context
// const [feedback, setFeedback] = useState(FeedbackData)
// deleteFeedback is here because that's where we have feedback data
// deleteFeedback gets passed to FeedbackList then to FeedbackItem to delete feedback card 
// when user click x button

// method moved to Context
// const deleteFeedback = (id) => {
//     if(window.confirm('Are you sure you want to delete?')) {
//         setFeedback(feedback.filter((item) => item.id !== id))
//     }
// }

// method moved to Context
// const addFeedback = (newFeedback) => {
//     newFeedback.id = uuidv4();
//     setFeedback([newFeedback, ...feedback])
// }
    return (
    <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
            <Routes>
                <Route exact path="/" element={
                <div>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
                </div>
        }>

        </Route>
        <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
        </div>
        </Router>
    </FeedbackProvider>
    )

// State is data
// Component State and App State
// Pass feedback State from App comp to FeedbackList comp


}
// key is a Prop, Prop is an attribute


export default App
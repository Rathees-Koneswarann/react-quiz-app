import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
function Question() {
    // retrieve score, questions and index from the store
    const score = useSelector(state => state.score)
    const questions = useSelector(state => state.questions)
    const questionIndex = useSelector(state => state.index)
    // define dispatch
    const dispatch = useDispatch()
    // create variables for the question and correct answer
    const question = questions[questionIndex]
    const answer = question.correct_answer
    return <div></div>
}
export default Question;
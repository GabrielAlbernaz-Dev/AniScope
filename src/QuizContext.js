import React, { createContext, useState } from 'react'

export const QuizContext = createContext();

export const QuizStorage = ({children}) => {
    const [questions,setQuestions] = useState([]);

    return (
        <>
            <QuizContext.Provider value={{questions,setQuestions}}>
                {children}
            </QuizContext.Provider>
        </>
    )
}
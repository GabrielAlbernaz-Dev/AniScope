import React, { useContext, useEffect, useRef, useState } from 'react'
import CardQuiz from '../../components/CardQuiz/CardQuiz'
import MainSection from '../../components/MainSection/MainSection'
import styles from './Quiz.module.css'
import { QuizContext } from '../../QuizContext'
import { Link, useParams } from 'react-router-dom'
import Correct from '../../components/Correct/Correct'
import { FaCheck } from 'react-icons/fa';

const Questions = () => {
  const quizContext = useContext(QuizContext);
  const [quizData,setQuizData] = useState({});
  const [btnDisabled,setBtnDisabled] = useState(true);
  const [counterSlide,setCounterSlide] = useState(0);
  const [corrects,setCorrects] = useState(0);
  const [questionLength,setQuestionLength] = useState(0);

  useEffect(()=>{
    if(Object.keys(quizData).length === counterSlide) setBtnDisabled(true);
    else setBtnDisabled(false)
  },[quizData])

  if(!quizContext.questions.length > 0) return false;

  function handleQuestionChange({currentTarget}) {
    setQuizData({...quizData,[currentTarget.name]:currentTarget.value});
  }

  function checkResults() {
    const corrects = quizContext.questions.filter((question,i) => Object.values(quizData)[i] === question.correct);
    setCorrects(corrects);
    console.log(corrects);
  }

  function handleSlide() {
    setQuestionLength(questionLength + 1);
    setCounterSlide(counterSlide + 1);
    if(counterSlide < quizContext.questions.length - 1) {
      setBtnDisabled(true);
    } else {
      checkResults()
    }
  }
  
  return (
    <MainSection>
      {quizContext.questions.map((question,i)=> 
      <CardQuiz 
        key={question.id} 
        id={question.id}
        active={counterSlide === i}
        data={quizData}
        disabled={btnDisabled}
        question={question.question} 
        source={question.source} 
        answers={question.answers}
        name={question.name}
        handleClick={handleSlide}
        onChange={handleQuestionChange}
      />)}
      {corrects && <Correct corrects={corrects.length} questions={questionLength}/>}
      {corrects &&
        <div className={styles.correctQuestionContainer}>
          { 
          corrects.map(correct => 
          <div key={correct.name} className={styles.correctQuestionBox}>
            {correct.question}
            <FaCheck color="var(--yellow)" />
          </div>)}
          <Link to="/quiz" className={styles.quizButtonBack}>Back to another quiz!</Link>
        </div>
      }
    </MainSection>
  )
}

export default Questions
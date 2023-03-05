import React from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as QuestionIcon } from '../../assets/questionIcon.svg';
import { ReactComponent as QuestionsSize } from '../../assets/questionNumber.svg';
import styles from './QuizBox.module.css'

const QuizBox = ({title,text,questionsNumber,route,...props}) => {
  return (
    <Link className={styles.quizBox} to={route} {...props}>
      {title && <div className={styles.titleContainer}>
        <QuestionIcon className={styles.icon}/>
        <h4 className={styles.title}>{title}</h4>
      </div> }
      {text && <p className={styles.text}>{text}</p>} 
      {questionsNumber && <span className={styles.questionsNumberContainer}><QuestionsSize/>{questionsNumber} questions</span>}
    </Link>
  )
}

export default QuizBox
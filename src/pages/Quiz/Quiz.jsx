import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import MainSection from '../../components/MainSection/MainSection'
import QuizBox from '../../components/QuizBox/QuizBox'
import { QuizContext } from '../../QuizContext'
import { quizData } from '../../store/quiz'
import styles from './Quiz.module.css'

const Quiz = () => {
  const quizItems = quizData;
  const questions = useContext(QuizContext);

  async function setQuizQuestions({currentTarget}) {
    try {
      const res = await import(`../../store/${currentTarget.dataset.quiz}-quiz`);
      questions.setQuestions(res.data);
    } catch (error) {
      questions.setQuestions([]);
      return
    }
  }

  return (
    <MainSection>
      <div className={styles.quizBoxList}>
        {quizItems && quizItems.map(quiz => 
        <QuizBox onClick={setQuizQuestions} key={quiz.id} data-quiz={quiz.type} route={quiz.type} title={quiz.title} text={quiz.text} questionsNumber={quiz.questionsNumber} />)}
      </div>
    </MainSection>
  )
}

export default Quiz
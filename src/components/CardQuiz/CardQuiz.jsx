import React from 'react'
import RadioQuiz from '../Form/RadioQuiz'
import styles from './CardQuiz.module.css'

const CardQuiz = ({id,active,disabled,question,name,answers,source,onChange,handleClick}) => {
  if(active === false) return null;

  return (
    <div className={styles.card}>
      {source && <img className={styles.cardImage} src={source} alt="" />}
      <div className={styles.cardContent}>
        <svg className={styles.cardArc} xmlns="http://www.w3.org/2000/svg"><path /></svg>
        {question && <h3 className={styles.cardTitle}>{id}- {question}</h3>}
        <form className={styles.cardAnswers} onSubmit={(e) => e.preventDefault()}>
          <RadioQuiz answers={answers} data-index={id} labelClass={styles.cardAnswer} name={name} className={styles.cardOption} onChange={onChange} />
          {disabled === true ? '' : <button className={styles.cardNextButton} onClick={handleClick}>Next</button>}
        </form>
      </div>
    </div>
  )
}

export default CardQuiz
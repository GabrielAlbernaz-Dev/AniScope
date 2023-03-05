import React from 'react'
import Title from '../../components/Title/Title'
import styles from './Correct.module.css'

const Correct = ({corrects,questions}) => {
  return (
    <div className={styles.correctContainer}>
        <h2 
        className={styles.correctTitle}>
        You got <span>{corrects && corrects}</span> questions out of <span>{questions && questions}</span> correct
        </h2>
    </div>
  )
}

export default Correct
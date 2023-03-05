import React from 'react'
import styles from './GenerateButton.module.css'

const GenerateButton = ({text,onClick}) => {
  return (
    <div className={styles.containerGenerate}>
        <button onClick={onClick} className={styles.generateButton}>{text}</button>
    </div>
  )
}

export default GenerateButton
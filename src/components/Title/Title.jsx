import React from 'react'
import styles from './Title.module.css'

const Title = ({text,...props}) => {
  return (
    <h2 className={styles.title} {...props}>{text}</h2>
  )
}

export default Title
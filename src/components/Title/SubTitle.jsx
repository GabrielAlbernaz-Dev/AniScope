import React from 'react'
import styles from './Title.module.css'

const SubTitle = ({text,...props}) => {
    return (
        <h4 className={styles.subtitle} {...props}>{text}</h4>
    )
}

export default SubTitle
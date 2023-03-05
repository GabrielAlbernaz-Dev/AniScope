import React from 'react';
import styles from './ImageButton.module.css';

const ImageButton = ({text,color,background,link,...props}) => {
  return (
    <a href={link ? link : '#'} target="_blank" className={styles.button} style={{background:background,color:color}} {...props}>{text}</a>
  )
}

export default ImageButton
import React from 'react'
import styles from './AnimalPicture.module.css';

const AnimalPicture = ({src,alt}) => {
  return (
    <figure className={styles.figure}>
      <img src={src} alt={alt} />
    </figure>
  )
}

export default AnimalPicture
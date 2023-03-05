import React from 'react'
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <h2 className={styles.copyFooter}>© No Copyright, developed by <a href="https://github.com/GabrielAlbernaz-Dev" target="_blank">Gabriel Albernaz</a></h2>
    </footer>
  )
}

export default Footer
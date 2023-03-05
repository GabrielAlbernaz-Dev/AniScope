import React from 'react';
import styles from './Header.module.css';
import Nav from './Nav';

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <Nav/>
        </div>
    </header>
  )
}

export default Header
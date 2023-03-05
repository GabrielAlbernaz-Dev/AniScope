import React from 'react'
import notFoundImage from '../../assets/notFound.png';
import styles from './NotFound.module.css'
import MainSection from '../../components/MainSection/MainSection'
import Title from '../../components/Title/Title';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <MainSection>
        <div className={styles.notFoundContainer}>
          <Title text="The page cannot be found!"/>
          <img className={styles.notFoundImage} src={notFoundImage}/>
          <p className={styles.notFoundText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut modi, tempora voluptate officia id consectetur dolorum laboriosam dolore qui. Quod illo veritatis, tempora voluptate quos possimus? Modi non harum et!</p>
          <Link to="/" className={styles.notFoundButton}>Back to home!</Link>
        </div>
    </MainSection>
  )
}
export default NotFound
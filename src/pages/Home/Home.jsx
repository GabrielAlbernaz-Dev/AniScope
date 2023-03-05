import React from 'react'
import { Link } from 'react-router-dom'
import AnimalPicture from '../../components/AnimalPicture/AnimalPicture'
import Divider from '../../components/Divider/Divider'
import SubTitle from '../../components/Title/SubTitle'
import Title from '../../components/Title/Title'
import MainSection from '../../components/MainSection/MainSection';
import styles from './Home.module.css'
import pets from '../../assets/pets.jpg';
import FactQuote from '../../components/Fact/FactQuote'

const Home = () => {
  return (
    <MainSection main>
        <div className={styles.textContainer}>
          <SubTitle text="Discover and connect with animals!" />
          <Title text="Home Page"/>
          <p className={styles.text}>Welcome to our site about animals! Discover fascinating facts and information about a wide variety of creatures from around the world. Whether you're an animal lover or simply curious, our site has something for everyone. Explore our articles, quizzes and more.</p>
        </div>
        <div className={styles.ctaContainer}>
          <a className="cta" target="_blank" href="https://wa.me/5561991935370">Get a touch</a>
          <Link to="random" className={styles.more}>View More</Link>
        </div>
        <Divider/>
        <section className={styles.randomSection} id="random">
            <AnimalPicture src={pets} alt={pets}/>
            <div className="flex-center">
              <div className={styles.textContainer}>
                <SubTitle text="Have fun with new images every time!" />
                <Title text="Random Pictures"/>
                <p className={styles.text}>Our website is full of wonderful pictures of various animals from around the world!You never know what kind of animal you might discover next. Browse through our collection of random animal pictures and learn more about the incredible diversity of life on our planet</p>
              </div>
              <div className="flex-center">
                <Link to="random" className="cta">Try It Now</Link>
              </div>
            </div>
        </section>
        <Divider/>
        <section className={styles.factSection} id="fact">
            <FactQuote text="Did you know that cats are able to make more than 100 different sounds, while dogs can only make around 10?"/>
            <div className="flex-center" style={{marginTop:'2rem'}}>
            <Link to="fact" className="cta">See a new curiosity!</Link>
            </div>
        </section>
        <Divider/>
    </MainSection>
  )
}

export default Home
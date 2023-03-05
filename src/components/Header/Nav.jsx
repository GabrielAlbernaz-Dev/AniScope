import React, { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { ReactComponent as Brand } from '../../assets/brand.svg';
import { NavLink } from 'react-router-dom';
import { FaBars,FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [navActive,setNavActive] = useState(false);
  const [mobile,setMobile] = useState(false);

  useEffect(()=>{
    if (window.matchMedia("(max-width: 767px)").matches) {
      setMobile(true);
    } 
  },[])

  function handleNavMobile() {
    setNavActive(!navActive);
  }

  return (
    <nav className={`${styles.nav} container`}>
        <NavLink className={styles.brand} to="/">
            <Brand/>
            <h2 className={styles.title}>AniScope</h2>
        </NavLink>
        <ul onClick={() => setNavActive(false)} className={`${styles.links} ${navActive ? 'navActiveMobile' : ''}`}>
            <li><NavLink to="random">Random</NavLink></li>
            <li><NavLink to="fact">Fact</NavLink></li>
            <li><NavLink className="cta" to="quiz">Aniscope Quiz</NavLink></li>
        </ul>
        {mobile 
        && (navActive ? 
        <FaTimes className={styles.activeToggle} onClick={handleNavMobile} size={30} style={{cursor:'pointer'}} color="var(--yellow)"/> 
        : <FaBars onClick={handleNavMobile} size={24} style={{cursor:'pointer'}} color="var(--yellow)"/>)}
    </nav>
  )
}

export default Nav
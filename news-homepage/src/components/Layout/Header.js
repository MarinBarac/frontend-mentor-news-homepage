import { useState } from 'react';
import logo from '../../assets/images/logo.svg';

import styles from './Header.module.css';

const NAV_LINKS = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu((prevShowMenu) => {
            return !prevShowMenu;
        });
    }

    console.log(showMenu);

    return <div className={styles.header}>
        <div className={`${styles.backdrop} ${showMenu ? styles.active : ''}`} />
        <div className={styles.logoContainer}>
            <img src={logo} />
        </div>
        <nav className={`${styles.navbar} ${showMenu ? styles.active : ''}`}>
            <ul className={`${styles.navLinks}`}>
                {NAV_LINKS.map(link => (<li className={styles.navLink}>{link}</li>))}
            </ul>
        </nav>
        <div className={`${styles.hamburger} ${showMenu ? styles.active : ''}`} onClick={toggleMenu}>
            <span className={`${styles.hamburgerBar} ${styles.barOne}`}/>
            <span className={`${styles.hamburgerBar} ${styles.barTwo}`}/>
            <span className={`${styles.hamburgerBar} ${styles.barThree}`}/>
        </div>
    </div>
}

export default Header;
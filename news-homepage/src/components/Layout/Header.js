import logo from '../../assets/images/logo.svg';

import styles from './Header.module.css';

const NAV_LINKS = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

const Header = () => {
 return <div className={styles.header}>
    <div className={styles.logoContainer}>
        <img src={logo} />
    </div>
    <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
            {NAV_LINKS.map(link => (<li className={styles.navLink}>{link}</li>))}
        </ul>
    </nav>
 </div>
}

export default Header;
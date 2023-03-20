import {useState} from 'react';
import {NavLink} from 'react-router-dom';

import styles from './Menu.module.sass';

const Menu = () => {
    // Display Menu onClick
    const [menuIsActive, setMenuIsActive] = useState(false);

    const toggleMenu = () => {
        setMenuIsActive(!menuIsActive);
    };

    return (
        <nav className={styles.container}>
            <div
                className={`${styles.menu__container} ${styles.desktop} 
                ${menuIsActive ? styles.active : ''}`}
            >
                <ul>
                    <li>
                        <NavLink to="/projects" className={styles.menu__link}>
                           your projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/turbines" className={styles.menu__link}>
                            visualise data
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className={styles.menu__link}>
                            notifications
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className={styles.menu__link}>
                            settings
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Mobile Layout */}
            <div
                className={`${styles.menu__container} ${styles.mobile} ${
                    menuIsActive ? styles.active : ''
                }`}
            >
                <ul>
                    <li>
                        <NavLink to="/projects" className={styles.menu__link}>
                            your projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className={styles.menu__link}>
                            visualise data
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className={styles.menu__link}>
                            notifications
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className={styles.menu__link}>
                            settings
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Burger/Cross icon*/}
            <div className={styles.icon__container} onClick={toggleMenu}>
                <div className={`${styles.icon} ${menuIsActive ? styles.active : ''}`}>
                    <div className={styles.burger__cross}></div>
                </div>
            </div>
        </nav>
    );
};

export default Menu;

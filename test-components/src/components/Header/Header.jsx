import {NavLink} from 'react-router-dom';

import styles from './Header.module.sass';
import Menu from "../Header/Menu/Menu.jsx";
import LogoMain from "../../icons/LogoMain.jsx";

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.logo__container}>
                    <>
                        <NavLink to="/">
                            <LogoMain/>
                        </NavLink>
                    </>
            </div>
            <div className={styles.menu_container}>
                <Menu/>
            </div>
        </header>
    );
};

export default Header;

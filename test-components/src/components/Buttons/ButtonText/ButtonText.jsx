import React from 'react';
import {Link} from "react-router-dom";

import styles from './ButtonText.module.scss';

function ButtonText() {
    return (
        <Link to="/">
            <a className={styles.link}>Go to homepage</a>
        </Link>
    );
}

export default ButtonText;
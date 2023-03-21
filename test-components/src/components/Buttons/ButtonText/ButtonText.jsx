import React from 'react';
import {Link} from "react-router-dom";

import styles from './ButtonText.module.scss';

function ButtonText({text}) {
    return (
        <Link to="/">
            <a className={styles.button_text}>{text}</a>
        </Link>
    );
}

export default ButtonText;
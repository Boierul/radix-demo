import React from 'react';
import {Link} from "react-router-dom";

import styles from './ButtonText.module.scss';

function ButtonText({text, fontSize}) {
    return (
        <Link to="/">
            <a className={styles.button_text} style={{
                fontSize: `${fontSize}`
            }}>{text}</a>
        </Link>
    );
}

export default ButtonText;
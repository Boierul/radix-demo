import React from 'react';
import {Link} from "react-router-dom";

import styles from './ButtonText.module.scss';

function ButtonText({text, fontSize, path}) {
    function handleClick() {
        if (path === 'none') {
            return;
        } else {
            window.location.href = `/${path}`;
        }
    }

    return (
        <Link to="" onClick={handleClick}>
            <a className={styles.button_text} style={{
                fontSize: `${fontSize}`
            }}>{text}</a>
        </Link>
    );
}

export default ButtonText;
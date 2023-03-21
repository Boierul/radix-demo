import React from 'react';
import {Link} from "react-router-dom";

import styles from "../ButtonText/ButtonText.module.scss";

function ButtonOutline(props) {
    return (
        <Link to="/">
            <a className={styles.button_text}>{text}</a>
        </Link>
    );
}

export default ButtonOutline;
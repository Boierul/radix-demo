import React from 'react';
import {Link} from "react-router-dom";

import styles from "./ButtonOutline.module.scss";

function ButtonOutline({text, fontSize, path}) {
    function handleClick() {
        window.location.href = `/${path}`;
    }

    return (
        <Link to={``} className={styles.button_outline} style={{ fontSize: `${fontSize}`}} onClick={handleClick}>
            {text}
        </Link>
    );
}

export default ButtonOutline;
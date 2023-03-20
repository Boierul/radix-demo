import React from 'react';
import styles from './HeaderText.module.scss';

function HeaderText({title, subtitle}) {
    return (
        <>
            <div className={styles.header_text_container}>
                <span className={styles.header_text_title}>{title}</span>
                <span className={styles.header_text_subtitle}>{subtitle}</span>
            </div>
        </>
    );
}

export default HeaderText;
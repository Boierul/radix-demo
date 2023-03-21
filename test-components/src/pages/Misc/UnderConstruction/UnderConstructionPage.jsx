import React from 'react';
import Header from "../../../components/Header/Header.jsx";
import styles from './UnderConstructionPage.module.scss';
import ButtonText from "../../../components/Buttons/ButtonText/ButtonText.jsx";

function UnderConstructionPage() {
    return (
        <>
            <Header/>

            <div className={styles.construction_container}>
                <div className={styles.construction_title}>
                    Under Construction

                    <div className={styles.construction_button}>
                        <ButtonText text="Go to homepage"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UnderConstructionPage;
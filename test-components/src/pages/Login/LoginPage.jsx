import React from 'react';
import styles from './LoginPage.module.scss';
import LogoMain from "../../icons/LogoMain.jsx";
import TabsDemo from "../../components/Tabs/TabsDemo.jsx";

function LoginPage() {
    return (
        <div className={styles.login_container}>
            <div className={styles.login_inner_container}>
                <div className={styles.login_logo}>
                    <LogoMain/>
                </div>

                <div className={styles.login_subtitle}>
                    Ingenuity for life
                </div>
            </div>

            <div className={styles.login_inner_container} style={{ backgroundColor: "#fafafa"}}>
                <TabsDemo/>
            </div>
        </div>
    );
}

export default LoginPage;
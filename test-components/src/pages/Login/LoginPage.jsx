import React from 'react';
import TabsDemo from "../../components/Tabs/TabsDemo.jsx";
import styles from './LoginPage.module.scss';
import icon from '../../icons/png/Siemens-Emblem.png';

function LoginPage() {
    return (
        <div className={styles.login_container}>
            <div className={styles.login_inner_container}>
                <div style={{
                }}>
                   <img src={icon} style={{
                       width: '250px',
                       height: '140px',
                   }}/>
                </div>
                {/*<div className={styles.login_logo}>*/}
                {/*    <LogoMain/>*/}
                {/*</div>*/}

                {/*<div className={styles.login_subtitle}>*/}
                {/*    Ingenuity for life*/}
                {/*</div>*/}
            </div>

            <div className={styles.login_inner_container} style={{ backgroundColor: "#fafafa"}}>
                <TabsDemo/>
            </div>
        </div>
    );
}

export default LoginPage;
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import styles from './TabsDemo.module.scss';
import ButtonOutline from "../Buttons/ButtonOutline/ButtonOutline.jsx";

const TabsDemo = () => (
    <Tabs.Root className={styles.TabsRoot} defaultValue="tab1">
        <Tabs.List className={styles.TabsList} aria-label="Manage your account">
            <Tabs.Trigger className={styles.TabsTrigger} value="tab1">
                Login
            </Tabs.Trigger>
            <Tabs.Trigger className={styles.TabsTrigger} value="tab2">
                Register
            </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className={styles.TabsContent} value="tab1">
            <p className={styles.Text}>Access your sustainable account here</p>

            <fieldset className={styles.Fieldset}>
                <label className={styles.Label}>
                    Username
                </label>
                <input className={styles.Input}/>
            </fieldset>

            <fieldset className={styles.Fieldset}>
                <label className={styles.Label}>
                Password
                </label>
                <input className={styles.Input}/>
            </fieldset>

            <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                <ButtonOutline text='Log in' fontSize='15px' path='projects'/>
            </div>
        </Tabs.Content>

        <Tabs.Content className={styles.TabsContent} value="tab2">
            <p className={styles.Text}>Create a sustainable new account here</p>
            <fieldset className={styles.Fieldset}>
                <label className={styles.Label} htmlFor="currentPassword">
                    Your username
                </label>
                <input className={styles.Input} id="currentPassword" type="password" />
            </fieldset>
            <fieldset className={styles.Fieldset}>
                <label className={styles.Label} htmlFor="newPassword">
                    Insert password
                </label>
                <input className={styles.Input} id="newPassword" type="password" />
            </fieldset>
            <fieldset className={styles.Fieldset}>
                <label className={styles.Label} htmlFor="confirmPassword">
                    Confirm password
                </label>
                <input className={styles.Input} id="confirmPassword" type="password" />
            </fieldset>
            <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
                <ButtonOutline text='Register' fontSize='15px' path='projects'/>
            </div>
        </Tabs.Content>
    </Tabs.Root>
);

export default TabsDemo;
import React from 'react';
import Header from "../../components/Header/Header.jsx";
import DialogDemo from "../../components/Dialog/DialogDemo.jsx";
import NavigationMenuDemo from "../../components/NavigationMenu/NavigationMenuDemo.jsx";
import Map from "../../components/Maps/Map.jsx";
import HoverCard from "../../components/HoverCard/HoverCard.jsx";
import ProjectsContainer from "../../components/Containers/ProjectsContainer/ProjectsContainer.jsx";
import Demo from "../../components/Containers/Demo/Demo.jsx";

import styles from './Home.module.css';

function Home() {
    return (
        <>
            <Header/>

            <div style={{
                paddingTop: '4rem'
            }}>
                {/*<NavigationMenuDemo/>*/}
                {/*<div style={{*/}
                {/*    width: "50%",*/}
                {/*    height: "50%",*/}
                {/*    display: "flex",*/}
                {/*    alignItems: "center",*/}
                {/*    justifyContent: "center",*/}
                {/*    border: "1px solid black",*/}
                {/*    borderRadius: "10px"*/}
                {/*}}>*/}
                {/*    /!*<Map/>*!/*/}
                {/*    <ProjectsContainer/>*/}
                {/*</div>*/}
                {/*<HoverCard/>*/}
                <div className={styles.grid_container}>
                    <div className={styles.grid_container_row}>
                        <Demo turbinesCount="60" projectName="Project-01"/>
                    </div>
                    <div className={styles.grid_container_row}>
                        <Demo turbinesCount="84" projectName="Project-02"/>
                    </div>
                    <div className={styles.grid_container_row}>
                        <Demo turbinesCount="67" projectName="Project-03"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
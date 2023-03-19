import React from 'react';
import Header from "../../components/Header/Header.jsx";
import DialogDemo from "../../components/Dialog/DialogDemo.jsx";
import NavigationMenuDemo from "../../components/NavigationMenu/NavigationMenuDemo.jsx";
import Map from "../../components/Maps/Map.jsx";
import HoverCard from "../../components/HoverCard/HoverCard.jsx";
import ProjectsContainer from "../../components/Containers/ProjectsContainer/ProjectsContainer.jsx";
import Demo from "../../components/Containers/Demo/Demo.jsx";

import styles from './Home.module.css';
import ScrollArea from "../../components/ScrollArea/ScrollArea.jsx";

function Home() {
    return (
        <>
            <Header/>

            <div style={{
                paddingTop: '4rem'
            }}>
               Home Container
            </div>
        </>
    );
}

export default Home;
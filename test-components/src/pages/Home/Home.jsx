import React from 'react';
import Header from "../../components/Header/Header.jsx";
import DialogDemo from "../../components/Dialog/DialogDemo.jsx";
import NavigationMenuDemo from "../../components/NavigationMenu/NavigationMenuDemo.jsx";
import Map from "../../components/Maps/Map.jsx";
import HoverCard from "../../components/HoverCard/HoverCard.jsx";
import ProjectsContainer from "../../components/Containers/ProjectsContainer/ProjectsContainer.jsx";

function Home() {
    return (
        <>
            <Header/>

            <div style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                {/*<NavigationMenuDemo/>*/}
                <div style={{
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid black",
                    borderRadius: "10px"
                }}>
                    {/*<Map/>*/}
                    <ProjectsContainer/>
                </div>
                {/*<HoverCard/>*/}
            </div>
        </>
    );
}

export default Home;
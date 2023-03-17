import React from 'react';
import Header from "../../components/Header/Header.jsx";
import DialogDemo from "../../components/Dialog/DialogDemo.jsx";
import NavigationMenuDemo from "../../components/NavigationMenu/NavigationMenuDemo.jsx";

function Home() {
    return (
        <>
          <Header/>

            <div style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <NavigationMenuDemo/>
            </div>
        </>
    );
}

export default Home;
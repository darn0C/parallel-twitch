import React from "react"
import "./App.scss";
import Instructions from "../general/Instructions/Instructions"
import NavBar from "../general/NavBar/NavBar";
import pageIcon from "../../favicon/twitch.png";

const App = () => {
    const pageTitle = 'Parallel Twitch'
    return <>
        <NavBar title={pageTitle} icon={pageIcon}/>
        <link rel="icon" href="svg/twitch.svg" sizes="any" type="image/svg+xml"></link>
        <title>{pageTitle}</title>
        <div className="instructionsContainer">
        <Instructions />
        </div>
    </>
}

export default App
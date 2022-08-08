import React from "react"
import "./App.scss";
import FirstSteps from "../general/FirstSteps/FirstSteps"

const App = () => {
    return <>
        <link rel="icon" href="svg/twitch.svg" sizes="any" type="image/svg+xml"></link>
        <title>Parallel Twitch</title>
        <div className="stepsContainer">
        <FirstSteps />
        </div>
    </>
}

export default App
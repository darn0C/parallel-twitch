import React from "react";
import "./FirstSteps.scss";

const FirstSteps: React.FC = () => {
    return (
        <>
            <span className="step">1. Choose your layout (up to 4 streams)</span>
            <span className="step">2. Input the name of the stream/s you want to watch or copy and paste the url/s</span>
            <span className="step">3. Click on 'Watch'</span>
            <span className="step">4. Enjoy!</span>
        </>
    )
}

export default FirstSteps
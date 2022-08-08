import React from "react";
import "./FirstSteps.scss";

interface FirstStepsProps {
    title: string;
}

const FirstSteps: React.FC<FirstStepsProps> = ({title}) => {
    return <h1>{title}</h1>
}

export default FirstSteps
import React from "react";
import "./NavBar.scss";

interface NavBarProps {
    icon: string;
    title: string;
}

const NavBar: React.FC<NavBarProps> = ({icon,title}) => {
    return (
        <div className="navBar">
            <div className="navBarIconContainer">
            <img src={icon} className="navBarIcon"/>
            </div>
            <span className="navBarTitle">{title}</span>
        </div>
    )
}

export default NavBar
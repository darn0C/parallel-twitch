import React from 'react';
import './NavBar.scss';
import { navigate } from 'gatsby';

interface NavBarProps {
  icon: string;
  title: string;
}

const NavBar: React.FC<NavBarProps> = ({ icon, title }) => (
  <div className="navBar">
    <div className="navBarIconContainer">
      <button
        type="button"
        className="navBarButton"
        onClick={() => navigate('/')}
      >
        <img src={icon} className="navBarButtonIcon" alt="Page Icon" />
      </button>
    </div>
    <span className="navBarTitle">{title}</span>
  </div>
);

export default NavBar;

import React from 'react';
import NavBar from '../general/NavBar/NavBar';
import pageIcon from '../../favicon/twitch.png';

interface LayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pageTitle = 'Parallel Twitch';
  return (
    <>
      <NavBar title={pageTitle} icon={pageIcon} />
      <link rel="icon" href={pageIcon} sizes="any" type="image/svg+xml" />
      <title>{pageTitle}</title>
      {children}
    </>
  );
};

export default Layout;

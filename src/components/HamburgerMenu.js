import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  return (
    <Menu isOpen={false} pageWrapId={'page-wrap'} outerContainerId={'main-page'}>
      <Link to="/">Home</Link>
      <Link to="/experience">Expreinece</Link>
      <Link to="/blog">Blog</Link>
    </Menu>
  );
};

export default HamburgerMenu;

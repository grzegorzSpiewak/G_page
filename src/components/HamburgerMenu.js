/* eslint-disable */
import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const links = [
  { redirect: '/', anchor: 'home', icon: 'fa fa-home', id: 'links_01' },
  { redirect: '/experience', anchor: 'about', icon: 'fa fa-book', id: 'link_02' },
  { redirect: '/blog', anchor: 'blog', icon: 'fa fa-pencil', id: 'link_03' },
  { redirect: '/contact', anchor: 'contact', icon: 'fa fa-phone', id: 'link_04' }
];

const renderItems = (items) => {
  return items.map((item) =>
    <div className="menu__link" key={item.id} role="menu__item">
      <i className={`menu__link__icon ${item.icon}`} aria-hidden="true" />
      <Link to={item.redirect} className="menu__link__anchor">{item.anchor}</Link>
    </div>
  );
};

const HamburgerMenu = () => {
  return (
    <Menu isOpen={false} pageWrapId={'page-wrap'} outerContainerId={'main-page'}>
      { renderItems(links) }
    </Menu>
  );
};

export default HamburgerMenu;

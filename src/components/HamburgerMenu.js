import React from 'react';
import { push as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const links = [
  { redirect: "/", anchor: "home", icon: "fa fa-home" },
  { redirect: "/experience", anchor: "about", icon: "fa fa-book" },
  { redirect: "/blog", anchor: "blog", icon: "fa fa-pencil"},
  { redirect: "/contact", anchor: "contact", icon: "fa fa-phone"}
];

const renderItems = (items) => {
  return items.map((item, i) =>
    <div className="menu__link" key={i} role="menu__item">
      <i className={`menu__link__icon ${item.icon}`} aria-hidden="true" />
      <Link to={item.redirect} className="menu__link__anchor">{item.anchor}</Link>
    </div>
  )
};

const HamburgerMenu = () => {
  return (
    <Menu isOpen={false} pageWrapId={'page-wrap'} outerContainerId={'main-page'}>
      { renderItems(links) }
    </Menu>
  );
};

export default HamburgerMenu;

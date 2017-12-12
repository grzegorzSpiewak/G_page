/* eslint-disable */
import React from 'react';

const socialLinks = [
  { href: '//onet.pl', icon: 'fa fa-linkedin', id: 'links_linkedin' },
  { href: '//wp.pl', icon: 'fa fa-github', id: 'link_github' },
];

const renderItems = (items) => {
  return items.map((item) =>
    <li className="footer__list__item" key={item.id} role="list__item">
      <a
        href={item.href}
        target="_blank"
      >
        <i
          className={`footer__list__item__icon ${item.icon}`}
          aria-hidden="true"
        />
      </a>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__wrap">
        <address className="footer__date">{(new Date().getFullYear())}&copy; All rights reserved. Greg</address>
        <ul className="footer__list">
          {renderItems(socialLinks)}
        </ul>
      </section>
    </footer>
  );
};

export default Footer;

import React from 'react';

import { RegionLink } from './links/RegionLink'
import { AdviceLink } from './links/AdviceLink'
import './Footer.scss';



const Footer = ({
  activeCategory,
  propRegionFilter
}) => {

  return (

    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__block">
            <div className="footer-socials">
              <a href="#1" className="footer-socials__logo-link">
                <img
                  src="/domlook/img/footer/logo-footer.png"
                  alt="логотип"
                  className="footer-socials__logo-image"
                />
              </a>
              <ul className="footer-socials__list">
                <li className="footer-socials__list-item">
                  <a href="https://www.facebook.com" className="footer-socials__list-link">
                    <img
                      src="/domlook/img/footer/fb_icon.png"
                      alt="фейсбук"
                      className="footer-socials__list-icon"
                    />
                  </a>
                </li>
                <li className="footer-socials__list-item">
                  <a href="https://www.vk.com" className="footer-socials__list-link">
                    <img
                      src="/domlook/img/footer/vk_icon.png"
                      alt="вконтакте"
                      className="footer-socials__list-icon"
                    />
                  </a>
                </li>
                <li className="footer-socials__list-item">
                  <a href="https://www.twitter.com" className="footer-socials__list-link">
                    <img
                      src="/domlook/img/footer/tw_icon.png"
                      alt="твитер"
                      className="footer-socials__list-icon"
                    />
                  </a>
                </li>
                <li className="footer-socials__list-item">
                  <a href="https://www.google.com" className="footer-socials__list-link">
                    <img
                      src="/domlook/img/footer/google_icon.png"
                      alt="гугл"
                      className="footer-socials__list-icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="foot-wrap-link">
              <div className="footer-cities">
                <RegionLink propRegionFilter={propRegionFilter} />
              </div>
              <div className="footer-usefull-links">
                < AdviceLink />
                {/* activeCategory={activeCategory} */}
              </div>
            </div>
          </div>
          <div className="footer-settings">
            <button
              type="button"
              className="footer-settings__button"
            >
              Требования к недвижимости
          </button>
            <button
              type="button"
              className="footer-settings__button"
            >
              Планировка квартиры
          </button>
          </div>
          <div className="footer-copyrights">
            <p className="footer-copyrights__text">
              Copyright © 2019. All Rights Reserved.
          </p>
            <a href="#1" className="footer-copyrights__link">
              <p className="footer-copyrights__text">
                e-mail: adv@domlook.com
            </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
};



export default Footer;
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from '../../images/logo.svg';
import './Footer.css';

function Footer () {
  
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="page__container">
        <div className="footer__container">
          <div className="footer__logo-block">
            <img className="footer__logo" src={logo} alt="лого"/>
          </div>
          <div className="footer__nav-block">
            <nav className="footer__nav-links">
              <ul className="footer__nav-list">
                <li>
                  <Link to='trustedId' className = 'footer__nav-link' duration={800} smooth={true}>Сертификаты</Link>
                </li>
                <li>
                  <Link to='aboutUsId' className = 'footer__nav-link' duration={800} smooth={true}>О нас</Link>
                </li>
                <li>
                  <Link to='servicesId' className = 'footer__nav-link' duration={800} smooth={true}>Услуги</Link>
                </li>
                <li>
                  <Link to='testimonialsId' className = 'footer__nav-link' duration={800} smooth={true}>Отзывы</Link>
                </li>
                <li>
                  <Link to='goodsId' className = 'footer__nav-link' duration={800} smooth={true}>Продукция</Link>
                </li>
                <li>
                  <Link to='contactUsId' className = 'footer__nav-link' duration={800} smooth={true}>Контакты</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <p className="footer__copyright">TLC 2023</p>
      </div>
    </footer>     
  );
}

export default Footer;

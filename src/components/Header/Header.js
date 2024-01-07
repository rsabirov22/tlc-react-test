import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../images/logo.svg';
import './Header.css';

function Header (props) {
  return (
    <header className="header">
      <div className="page__container">
        <div className="header__container">

          <p className="header__logo-container">
            <img className="header__logo" src={logo} alt="лого"/>
          </p>
          
          {props.children}

          <Link to='contactUsId' className="btn btn_outlined btn_request" duration={800} smooth={true}>
            Оставить заявку
          </Link>
          
        </div>
      </div>
    </header>
  );
}

export default Header;

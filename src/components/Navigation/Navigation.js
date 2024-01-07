import React from "react";
import { Link } from 'react-scroll';
import './Navigation.css'

function Navigation ({isOpen, onClose, className}) {
    return (
        <div className={isOpen ? `${className} navigation_opened` : `${className}`}>
            <div className="navigation__container">
                <nav className="navigation__links">
                  <Link 
                    to='trustedId' 
                    className="navigation__link" 
                    duration={800} 
                    smooth={true} 
                    onClick={onClose}
                  >
                    Сертификаты
                  </Link>
                  <Link 
                    to='aboutUsId' 
                    className="navigation__link" 
                    duration={800} 
                    smooth={true}
                    onClick={onClose}
                  >
                    О нас
                  </Link>
                  <Link 
                    to='servicesId' 
                    className="navigation__link" 
                    duration={800} 
                    smooth={true}
                    onClick={onClose}
                  >
                    Услуги
                  </Link>
                  <Link
                    to='testimonialsId'
                    className="navigation__link"
                    duration={800}
                    smooth={true}
                    onClick={onClose}
                  >
                    Отзывы
                  </Link>
                  <Link
                    to='goodsId'
                    className="navigation__link"
                    duration={800}
                    smooth={true}
                    onClick={onClose}
                  >
                    Продукция
                  </Link>
                  <Link
                    to='contactUsId'
                    className="navigation__link"
                    duration={800}
                    smooth={true}
                    onClick={onClose}
                  >
                    Контакты
                  </Link>
                </nav>
                <Link 
                  to='contactUsId' 
                  className="btn btn_outlined btn_request-nav"
                  duration={800}
                  smooth={true}
                  onClick={onClose}
                >
                  Оставить заявку
                </Link>
                <button className="navigation__close-menu" onClick={onClose} type='button' />
            </div>    
        </div>
    )
}

export default Navigation;

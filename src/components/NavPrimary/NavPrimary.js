import React from 'react';
import { Link } from 'react-scroll';
import './NavPrimary.css';

function NavPrimary () {

    return (
        <div className='nav-primary'>
            <nav className="nav-primary__links">
              <ul className="nav-primary__list">
                <li>
                  <Link to='trustedId' className = 'nav-primary__link' duration={800} smooth={true}>Сертификаты</Link>
                </li>
                <li>
                  <Link to='aboutUsId' className = 'nav-primary__link' duration={800} smooth={true}>О нас</Link>
                </li>
                <li>
                  <Link to='servicesId' className = 'nav-primary__link' duration={800} smooth={true}>Услуги</Link>
                </li>
                <li>
                  <Link to='testimonialsId' className = 'nav-primary__link' duration={800} smooth={true}>Отзывы</Link>
                </li>
                <li>
                  <Link to='goodsId' className = 'nav-primary__link' duration={800} smooth={true}>Продукция</Link>
                </li>
                <li>
                  <Link to='contactUsId' className = 'nav-primary__link' duration={800} smooth={true}>Контакты</Link>
                </li>
              </ul>
            </nav>  
        </div>       
    );
}

export default NavPrimary;

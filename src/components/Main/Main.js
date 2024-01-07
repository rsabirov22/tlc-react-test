import React from 'react';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Experience from '../Experience/Experience.js';
import Testimonials from '../Testimonials/Testimonials.js';
import Trusted from '../Trusted/Trusted.js';
import ContactUs from "../ContactUs/ContactUs";
import Navigation from "../Navigation/Navigation.js";
import Services from "../Services/Services.js";
import Goods from "../Goods/Goods.js";
import './Main.css';

function Main ({ isMenuOpen, onClose, onImageClick, onImageCardClick, docs, goodCards }) {
    return (
        <main className='content'>

            <Promo/>

            <Trusted
              onImageClick={onImageClick}
              docs={docs}
            />
          
            <AboutProject />

            <Experience />
          
            <Services />
          
            <Testimonials />
          
            <Goods
              goodCards={goodCards}
              onImageCardClick={onImageCardClick}
            />
          
            <ContactUs />
          
            <Navigation
              className="navigation navigation_mobile"
              isOpen={isMenuOpen}
              onClose={onClose}
            />

        </main>
    );
}

export default Main;

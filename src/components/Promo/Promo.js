import React from 'react';
import NavPrimary from '../NavPrimary/NavPrimary.js';
import './Promo.css';
import {Link} from "react-router-dom";

function Promo () {

    return (
        <section className="promo">
          <div className="page__container">
            <div className="promo__container">
              <p className="content__block-title promo__block-title">Cyber security</p>
              <h1 className="promo__title">Cyber Recovery as a Service</h1>
              <p className="content__block-description promo__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button type="button" className="btn btn_outlined">
                Смотреть видео
              </button>
            </div>
          </div>
        </section>             
    );
}

export default Promo;

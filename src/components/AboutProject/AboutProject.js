import React from 'react';
import aboutUsImg from '../../images/movie-1.png';
import './AboutProject.css';

function AboutProject () {
    return (
        <section className="about-project" id="aboutUsId">
          <div className="page__container">
            <div className="about-project__container">
              <div className="about-project__left">
                <img src={aboutUsImg} alt="о нас" className="about-project__image"/>
                <div className="about-project__trusted">
                  <p className="about-project__trusted-number">
                    1,300+
                  </p>
                  <p className="about-project__trusted-text">
                    Довольных клиентов
                  </p>
                </div>
              </div>
              <div className="about-project__description">
                <p className="content__block-title about-project__title">O нас</p>
                <h3 className="content__block-head about-project__head">
                  We AI-Powered Threat Detection System
                </h3>
                <p className="content__block-description about-project__descr-text">
                  Maecenas eros dui, tempus sit amet quam ac, ultrices vehicula elit. Sed euismod vel tortor et luctus. In viverra finibus velit et ullamcorper.
                </p>
                <ul className="about-project__list">
                  <li className="about-project__list-item">
                    Real-time network analysis.
                  </li>
                  <li className="about-project__list-item">
                    200+ algorithms to detect data.
                  </li>
                  <li className="about-project__list-item">
                    Detection of rogues, insider threats.
                  </li>
                  <li className="about-project__list-item">
                    Comprehensive visibility across on-premise.
                  </li>
                  <li className="about-project__list-item">
                    Comprehensive visibility across on-premise.
                  </li>
                </ul>
              </div>
            </div>
            <div className="benefits">
              <div className="benefits__left">
                <p className="content__block-title about-project__title benefits__title">Почему мы</p>
                <h3 className="content__block-head about-project__head benefits__head">
                  Нас стоит выбрать
                </h3>
                <p className="content__block-description benefits__descr-text">
                  Maecenas eros dui, tempus sit amet quam ac, ultrices vehicula elit. 
                  Sed euismod vel tortor et luctus. In viverra finibus velit et ullamcorper. 
                  Vivamus eleifend velit ac lobortis fringilla. Fusce fermentum in ligula non convallis.
                </p>
                <p className="content__block-description benefits__descr-text">
                  Cras auctor tempus mattis. Proin convallis turpis sed aliquam dignissim. 
                  Vivamus eleifend velit ac lobortis fringilla.
                </p>
              </div>
              <div className="benefits__description">
                <div className="benefits__cards">
                  <div className="benefits__card">
                    <span className="benefits__icon benefits__icon_scale"></span>
                    <p className="benefits__title">Scale Indefinitely</p>
                    <p className="benefits__description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
                  </div>
                  <div className="benefits__card">
                    <span className="benefits__icon benefits__icon_improve"></span>
                    <p className="benefits__title">Improve Your Security</p>
                    <p className="benefits__description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
                  </div>
                  <div className="benefits__card">
                    <span className="benefits__icon benefits__icon_vis"></span>
                    <p className="benefits__title">Visibility Every Branch</p>
                    <p className="benefits__description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
                  </div>
                  <div className="benefits__card">
                    <span className="benefits__icon benefits__icon_auto"></span>
                    <p className="benefits__title">Automate Routine</p>
                    <p className="benefits__description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>     
    );
}

export default AboutProject;

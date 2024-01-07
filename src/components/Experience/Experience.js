import React from 'react';
import './Experience.css';

function Experience () {
  return (
    <section className="experience">
      <div className="page__container">
        <div className="experience__container">
          <div className="experience__block">
            <div className="experience__item">
              <p className="experience__number">2,400+</p>
              <p className="experience__text">Выполенено проектов</p>
            </div>
            <div className="experience__item">
              <p className="experience__number">1,200+</p>
              <p className="experience__text">Довольных клиентов</p>
            </div>
            <div className="experience__item">
              <p className="experience__number">18+</p>
              <p className="experience__text">На рынке</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

import React from 'react';
import './Services.css';

function Services ({ onImageClick, docs }) {
  return (
    <section className="services" id="servicesId">
      <div className="page__container">
        <div className="services__container">
          <p className="content__block-title services__title">Наши услуги</p>
          <h3 className="content__block-head services__head">Услуги</h3>
          <p className="content__block-description services__descr-text">
            Maecenas eros dui, tempus sit amet quam ac, ultrices vehicula elit.
            Sed euismod vel tortor et luctus. In viverra finibus velit et ullamcorper.
            Vivamus eleifend
          </p>
          <div className="services__block">
            <div className="services__item">
              <span className="services__icon"></span>
              <p className="services__item-title">Attack Evidence</p>
              <p className="services__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut elit tellus, luctus nec ullamcorper mattis pulvinar.
              </p>
              <a href="#" className="services__item-btn">
                <p className="services__item-btn-text">Узнать больше</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path d="M0 10.5C0 13.2848 1.10625 15.9555 3.07538 17.9246C5.04451 19.8938 7.71523 21 10.5 21C13.2848 21 15.9555 19.8938 17.9246 17.9246C19.8938 15.9555 21 13.2848 21 10.5C21 7.71523 19.8938 5.04451 17.9246 3.07538C15.9555 1.10625 13.2848 0 10.5 0C7.71523 0 5.04451 1.10625 3.07538 3.07538C1.10625 5.04451 0 7.71523 0 10.5ZM9.88477 15.4629C9.49922 15.8484 8.87578 15.8484 8.49434 15.4629C8.11289 15.0773 8.10879 14.4539 8.49434 14.0725L12.0627 10.5041L8.49434 6.93574C8.10879 6.5502 8.10879 5.92676 8.49434 5.54531C8.87988 5.16387 9.50332 5.15977 9.88477 5.54531L14.1504 9.80273C14.5359 10.1883 14.5359 10.8117 14.1504 11.1932L9.88477 15.4629Z" fill="#15ABD9"/>
                </svg>
              </a>
            </div>
            <div className="services__item">
              <span className="services__icon"></span>
              <p className="services__item-title">Automated attack</p>
              <p className="services__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut elit tellus, luctus nec ullamcorper mattis pulvinar.
              </p>
              <a href="#" className="services__item-btn">
                <p className="services__item-btn-text">Узнать больше</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path d="M0 10.5C0 13.2848 1.10625 15.9555 3.07538 17.9246C5.04451 19.8938 7.71523 21 10.5 21C13.2848 21 15.9555 19.8938 17.9246 17.9246C19.8938 15.9555 21 13.2848 21 10.5C21 7.71523 19.8938 5.04451 17.9246 3.07538C15.9555 1.10625 13.2848 0 10.5 0C7.71523 0 5.04451 1.10625 3.07538 3.07538C1.10625 5.04451 0 7.71523 0 10.5ZM9.88477 15.4629C9.49922 15.8484 8.87578 15.8484 8.49434 15.4629C8.11289 15.0773 8.10879 14.4539 8.49434 14.0725L12.0627 10.5041L8.49434 6.93574C8.10879 6.5502 8.10879 5.92676 8.49434 5.54531C8.87988 5.16387 9.50332 5.15977 9.88477 5.54531L14.1504 9.80273C14.5359 10.1883 14.5359 10.8117 14.1504 11.1932L9.88477 15.4629Z" fill="#15ABD9"/>
                </svg>
              </a>
            </div>
            <div className="services__item">
              <span className="services__icon"></span>
              <p className="services__item-title">SIEM Integration</p>
              <p className="services__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut elit tellus, luctus nec ullamcorper mattis pulvinar.
              </p>
              <a href="#" className="services__item-btn">
                <p className="services__item-btn-text">Узнать больше</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path d="M0 10.5C0 13.2848 1.10625 15.9555 3.07538 17.9246C5.04451 19.8938 7.71523 21 10.5 21C13.2848 21 15.9555 19.8938 17.9246 17.9246C19.8938 15.9555 21 13.2848 21 10.5C21 7.71523 19.8938 5.04451 17.9246 3.07538C15.9555 1.10625 13.2848 0 10.5 0C7.71523 0 5.04451 1.10625 3.07538 3.07538C1.10625 5.04451 0 7.71523 0 10.5ZM9.88477 15.4629C9.49922 15.8484 8.87578 15.8484 8.49434 15.4629C8.11289 15.0773 8.10879 14.4539 8.49434 14.0725L12.0627 10.5041L8.49434 6.93574C8.10879 6.5502 8.10879 5.92676 8.49434 5.54531C8.87988 5.16387 9.50332 5.15977 9.88477 5.54531L14.1504 9.80273C14.5359 10.1883 14.5359 10.8117 14.1504 11.1932L9.88477 15.4629Z" fill="#15ABD9"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

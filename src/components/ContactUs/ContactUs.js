import React from 'react';
import './ContactUs.css';

function ContactUs () {
  return (
    <section className="contact-us" id="contactUsId">
      <div className="page__container">
        <div className="contact-us__container">
          <div className="contact-us__left">
            <p className="content__block-title contact-us__title">Наши координаты</p>
            <h3 className="content__block-head contact-us__head">Как с нами связаться</h3>
            <p className="content__block-description contact-us__descr-text">
              Maecenas eros dui, tempus sit amet quam ac, ultrices vehicula elit. 
              Sed euismod vel tortor et luctus. In viverra finibus velit et ullamcorper.
            </p>
            <div className="contact-us__data">
              <div className="contact-us__data-item">
                <span className="contact-us__icon contact-us__icon_phone"></span>
                <div className="contact-us__text-block">
                  <p className="contact-us__text">Номер телефона</p>
                  <p className="contact-us__data-text">123-234-1234</p>
                </div>
              </div>
              <div className="contact-us__data-item">
                <span className="contact-us__icon contact-us__icon_email"></span>
                <div className="contact-us__text-block">
                  <p className="contact-us__text">Email</p>
                  <p className="contact-us__data-text">hello@awesomesite.com</p>
                </div>
              </div>
              <div className="contact-us__data-item">
                <span className="contact-us__icon contact-us__icon_web"></span>
                <div className="contact-us__text-block">
                  <p className="contact-us__text">Инстаграм</p>
                  <p className="contact-us__data-text">www.awesomesite.com</p>
                </div>
              </div>
              <div className="contact-us__data-item">
                <span className="contact-us__icon contact-us__icon_address"></span>
                <div className="contact-us__text-block">
                  <p className="contact-us__text">Адрес</p>
                  <p className="contact-us__data-text">99 Roving St., Big City, PKU 23456</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-us__form-block">
            <form className="contact-us__form" noValidate>
              <h3 className="content__block-head contact-us__form-head">Оставить заявку</h3>
              <p className="content__block-description contact-us__form-text">
                Maecenas eros dui, tempus sit amet quam ac, ultrices vehicula elit.
              </p>
              <input
                type="text"
                className="c-input contact-us__form-input"
                id="phoneId"
                placeholder="Номер телефона"
                name="phone"
              />
              <button type="submit" className="btn btn_default contact-us__btn">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

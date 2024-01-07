import React from 'react';
import './ImagePopup.css';

function ImagePopup ({ doc, onClosePopup }) {
  return (
    <div className={doc.link ? 'gallery popup_opened' : 'gallery'}>
      <div className="gallery__container">
        <img src={doc.link} className="gallery__img" alt={doc.name}/>
        <button type="button" aria-label="Закрыть" className="gallery__close-btn" onClick={onClosePopup}></button>
      </div>
    </div>
  );
}

export default ImagePopup;

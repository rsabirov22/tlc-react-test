import React from 'react';
import './DocItem.css';

function DocItem ({ doc, onImageClick }) {

  function handleClick() {
    onImageClick(doc);
  }

  return (
    <div className="trusted__item">
      <img
        className="trusted__image"
        src={doc.link}
        alt={doc.name}
      />
      <span className="trusted__image-overlay" onClick={handleClick}></span>
    </div>
  );
}

export default DocItem;

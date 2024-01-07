import React from 'react';
import DocItem from "../DocItem/DocItem.js";
import './Trusted.css';

function Trusted ({ onImageClick, docs }) {
  return (
    <section className="trusted" id="trustedId">
      <div className="page__container">
        <div className="trusted__container">
          <p className="content__block-title trusted__title">Сертификаты</p>
          <h3 className="content__block-head trusted__head">Нам доверяют</h3>
          <p className="content__block-description trusted__descr-text">
            Maecenas eros dui, tempus sit amet quam ac, ultrices vehicula elit. 
            Sed euismod vel tortor et luctus. In viverra finibus velit et ullamcorper. 
            Vivamus eleifend
          </p>
          <div className="trusted__block">
            {docs.map(doc => {
              return <DocItem doc={doc} key={doc.id} onImageClick={onImageClick}/>
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trusted;

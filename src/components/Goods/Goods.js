import React from 'react';
import GoodsCard from "../GoodsCard/GoodsCard.js";
import './Goods.css';

function Goods ({ onImageCardClick, goodCards }) {
  return (
    <section className="goods" id="goodsId">
      <div className="page__container">
        <div className="goods__container">
          <p className="content__block-title goods__title">Товары</p>
          <h3 className="content__block-head goods__head">Наше производство</h3>
          <p className="content__block-description goods__descr-text">
            Maecenas eros dui, tempus sit amet quam ac, ultrices vehicula elit.
            Sed euismod vel tortor et luctus. In viverra finibus velit et ullamcorper.
            Vivamus eleifend
          </p>
          <div className="goods__block">
            {goodCards.map(card => {
              return <GoodsCard card={card} key={card.id} onImageCardClick={onImageCardClick}/>
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goods;

import React from "react";
import './ShopCategory.css'

const ShopCategory = (props) => {
  return (
    <div className="card-shop">
      <img src={props.src} />
      <div className="card-title">{props.title}</div>
    </div>
  );
};

export default ShopCategory;

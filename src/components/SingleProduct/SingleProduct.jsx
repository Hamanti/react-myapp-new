import { NavLink } from "react-router-dom";
import "./SingleProduct.css";
import Button from "../Button/Button";

export default function SingleProduct({ title, description, quantity, price, preview }) {
  return (
    <>
      <div className="single">
        <div className="single-block section">
          <img src={preview} alt="" className="single-img" />
          <div className="single-block__content">
              <div className="single-block__title">{title}</div>
              <div className="single-block__description">{description}</div>
              <div className="single-block__quantity">{quantity} шт.</div>
              <div className="single-block__price">{price} руб.</div>
          </div>
        </div>
      </div>
    </>
  );
}

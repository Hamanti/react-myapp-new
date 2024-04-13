import { NavLink } from "react-router-dom"
import "./Product.css"

export default function Product({ id, title, price, preview, subtitle, quantity }) {
    return (
        <>

            <NavLink to={"/catalog/" + id}>
                <div className="product">
                    <img src={preview} alt="" className="product-img" />
                    <div className="product-title">{title}</div>
                    <div className="product-subtitle">{subtitle}</div>
                    <div className="product-quantity">{quantity} шт.</div>
                    <div className="product-price">{price} руб.</div>
                    
                </div>
            </NavLink>

        </>
    )
}
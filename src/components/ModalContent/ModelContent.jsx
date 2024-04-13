import "./ModelContent.css"
import Product from "../Product/Product"
import { useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";

export default function ModelContent({ closeModal }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // При первом рендеринге компонента или при изменении cartItems
        // получаем товары из localStorage и устанавливаем их в состояние
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    }, []);

    function removeFromCart(title) {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            let productsArray = JSON.parse(storedProducts);

            // Удаляем товар из массива
            const updatedProducts = productsArray.filter(p => p.title !== title);

            // Обновляем localStorage
            localStorage.setItem('products', JSON.stringify(updatedProducts));

            // Обновляем состояние products
            setProducts(updatedProducts);
        }
    }

    return (
        <>
            <div className="modal">
                <div className="modal-head">
                    <div className="modal-head-left">
                        <h2>Корзина</h2>
                    </div>
                    <button onClick={closeModal}>Close</button>
                </div>
                <div className="modal-container">
                    {products.map((product, index) => (
                        <div className="cart-item" key={index}>
                            <CartItem {...product} />
                            <button className="main-btn" onClick={() => removeFromCart(product.title)}>Remove From Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
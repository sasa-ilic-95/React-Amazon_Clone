import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import Subtotal from "./Subtotal/Subtotal";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    src={require("../../Assets/Img/OCC_Amazon1._CB423492668_.jpg")}
                    alt=""
                />

                <div className="checkout_title">
                    <h3>Hello, {user?.email}</h3>
                    <h2>Your Shopping Basket</h2>
                </div>

                {basket.map((item) => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;

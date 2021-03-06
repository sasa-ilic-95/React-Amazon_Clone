import moment from "moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../../reducer";
import CheckoutProduct from "../../Checkout/CheckoutProduct/CheckoutProduct";
import "./Order.css";

function Order({ order }) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>
                {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
            </p>
            <p className="order_id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map((item) => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    removeButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order_total">Order total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    );
}

export default Order;

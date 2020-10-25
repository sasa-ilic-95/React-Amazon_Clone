import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../../StateProvider";

function CheckoutProduct({ id, title, image, price, rating, removeButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
            <img class="checkoutProduct_image" src={image} alt="" />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>{<StarIcon className="starIcon" />}</p>
                        ))}
                </div>
                {!removeButton && (
                    <button onClick={removeFromBasket}>
                        Remove from basket
                    </button>
                )}
            </div>
        </div>
    );
}

export default CheckoutProduct;

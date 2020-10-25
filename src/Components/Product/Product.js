import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../StateProvider";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item to the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>{<StarIcon className="starIcon" />}</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

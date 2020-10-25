import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Payment.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../../reducer";
import axios from "../../../axios";
import { db } from "../../../firebase";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [suceeded, setSuceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClienSecret] = useState(true);

    useEffect(() => {
        //Generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                // Stripe excepts the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClienSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [basket]);

    console.log("THE SECRET IS >>> ", clientSecret);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                //// paymentIntent = payment confirmation

                db.collection("users")
                    .doc(user?.uid)
                    .collection("orders")
                    .doc(paymentIntent.id)
                    .set({
                        basket: basket,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created,
                    });

                setSuceeded(true);
                setError(null);
                setProcessing(false);

                dispatch({
                    type: "EMPTY_BASKET",
                });

                history.replace("/orders");
            });
    };

    const handleChange = (e) => {
        //Listen for changes in the CardElement and display any errors as the customer types their details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>Maksima Gorkog 56</p>
                        <p>Belgrade, Serbia</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
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
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/* Stripe magic will go */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button
                                    disabled={
                                        processing || disabled || suceeded
                                    }
                                >
                                    <span>
                                        {processing ? (
                                            <p>Processing</p>
                                        ) : (
                                            "Buy Now"
                                        )}
                                    </span>
                                </button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;

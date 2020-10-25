import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Components/Checkout/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";

const promise = loadStripe(
    "pk_test_51HfmiGDgPvXzh117c19rTKSfN1m5MoiIAZhjF0ozuaYXyThwESHmNxPGfLWiHuXdBHJqIzezX2PcgWFNB1ZZa0tO00ZiTkmkGF"
);

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        // will only run once when the app component loads...

        auth.onAuthStateChanged((authUser) => {
            console.log("THE USER IS >>> ", authUser);

            if (authUser) {
                // the user just logged in / the user was logged in

                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                // the user is logged out
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

    return (
        // BEM
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/orders">
                        <Header />
                        <Orders />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51HfmiGDgPvXzh1175xLm4vkuj6h16fRWhiAJu232xBe3sImTlu9QBWgmz73IOUjVB7ycurmXR0loAM1Z1I2QM8kH00M6SybRWm"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymantIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymantIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

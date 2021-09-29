require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET);

exports.handler = async function(event , context) {
    const {cartProducts, totalAmount, shippingAmount} = JSON.parse(event.body);

    const calculateTotalAmount = ()=>{
        return totalAmount + shippingAmount;
    }

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount:calculateTotalAmount(),
            currency: "inr"
        })

        return {
            statusCode:200,
            body:JSON.stringify({clientSecret:paymentIntent.client_secret}),
        }
    } catch (error) {
        return {
            statusCode:500,
            body:JSON.stringify({error:error.message}),
        }
    }
}
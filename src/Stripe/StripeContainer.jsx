import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51JBiZNA0dAETqLO7fmUi5fi2XheEacfevN39RUyIR2AjwqFxtGP0TOLeKIWlb9uxa5YYJkLySlkExvcPhsqEpjX20016ecpzHD";
console.log("public key is " , PUBLIC_KEY)

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;
import process from "process";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    let items = JSON.parse(req.body.data);
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card", "konbini"],
        // The parameter is optional. The default value of expires_after_days is 3.
        payment_method_options: {
          konbini: {
            expires_after_days: 7,
          },
        },
        mode: "payment",
        line_items: items,
        customer: `${process.env.STRIPE_CUSTOMER_KEY}`,
        success_url: `${process.env.STRIPE_SUCCESS_URL}`,
        cancel_url: `${process.env.STRIPE_CANCEL_URL}`,
      });
      res.redirect(303, session.url);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

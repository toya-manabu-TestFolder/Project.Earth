const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: any, res: any) {
  console.log("a");
  if (req.method === "POST") {
    let items = req.body;
    if (!items || !Array.isArray(req.body)) {
      res.status(400);
      return;
    }
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: items,
        customer: "cus_NRwUeNGeFVmjiH",
        success_url: "/complete",
        cancel_url: "/loginuserCartPage",
      });
      console.log("redirecting to stripe item page...");
      res.status(200).json({ redirectUrl: session.url });
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

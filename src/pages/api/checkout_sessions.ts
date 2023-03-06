const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  req: { method: string; headers: { origin: any } },
  res: {
    redirect: (arg0: number, arg1: any) => void;
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: any): void; new (): any };
      end: { (arg0: string): void; new (): any };
    };
    setHeader: (arg0: string, arg1: string) => void;
  }
) {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              unit_amount: 100,
              currency: "jpy",
              product_data: {
                name: "アドホックな商品",
              },
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        customer: "cus_NRwUeNGeFVmjiH",
        success_url: "http://localhost:3000/complete",
        cancel_url: "http://localhost:3000/",
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

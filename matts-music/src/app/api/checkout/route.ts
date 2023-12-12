import { headers } from 'next/headers';
import { stripe } from '@/lib/stripe';

export async function POST(request: Request) {
    const body = await request.formData();
    const formData = new FormData();
    const price = body.get('price');
    const quantity = 1;
    
    const priceNum = String(price);

    const checkoutSession = await stripe.checkout.sessions.create({
        mode: "payment",
        success_url: `${headers().get("origin")}/success`,
        cancel_url: `${headers().get("origin")}/cancel`,
        line_items: [
            {
                price: priceNum,
                quantity,
            },
        ],
    });

    if (!checkoutSession) {
        return new Response("Error creating checkout session", {
            status: 500,
        });
    }

    if (!checkoutSession.url) {
        return new Response("Error creating checkout session", {
            status: 500,
        });
    }


    return Response.redirect(checkoutSession.url, 303);
}

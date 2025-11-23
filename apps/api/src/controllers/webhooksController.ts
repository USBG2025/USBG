import { Request, Response } from 'express';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const stripePaymentCompleted = async (req: Request, res: Response) => {
  // TODO: Implement only if needed after verification
  const sig = req.headers['stripe-signature'] as string;

  console.log('📨 Webhook received!');

  let event: Stripe.Event;

  console.log(req.body)
  console.log(sig)
  console.log()

  try {
    // Verify signature
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    console.log('✅ Signature verified!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📋 EVENT DETAILS:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Event ID:', event.id);
    console.log('Event Type:', event.type);
    console.log('Created:', new Date(event.created * 1000).toISOString());
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    // Log specific data based on event type
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      
      console.log('💰 PAYMENT DATA:');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('Session ID:', session.id);
      console.log('Customer Email:', session.customer_email);
      console.log('Amount Total:', session.amount_total, '(cents)');
      console.log('Amount:', `$${(session.amount_total || 0) / 100}`);
      console.log('Currency:', session.currency);
      console.log('Payment Status:', session.payment_status);
      console.log('Metadata:', JSON.stringify(session.metadata, null, 2));
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    }

    // Log full event data
    console.log('📦 FULL EVENT DATA:');
    console.log(JSON.stringify(event, null, 2));
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    return res.json({ received: true });

  } catch (err: any) {
    console.error('❌ Signature verification failed!');
    console.error('Error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
};


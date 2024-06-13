import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { StripeError } from '@stripe/stripe-js';

type CheckoutFormProps = {
    amount: number
    userStripeAccountId : string
  };
const CheckoutForm: React.FC<CheckoutFormProps> = ({ amount, userStripeAccountId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<StripeError | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    // Create PaymentIntent
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, userStripeAccountId }),
    });
    const { clientSecret } = await response.json();

    // Confirm the payment
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    });

    if (error) {
      setError(error);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      console.log('Payment succeeded');
      // Call your API to create an order
      await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paymentIntentId: paymentIntent.id, amount, userStripeAccountId }),
      });
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
      {error && <div>{error.message}</div>}
    </form>
  );
};

export default CheckoutForm;

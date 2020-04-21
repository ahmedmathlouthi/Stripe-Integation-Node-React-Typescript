import Stripe from 'stripe';
const stripe = new Stripe('sk_test_...', {
  apiVersion: '2020-03-02',
});

const createCustomer = async () => {
  const params: Stripe.CustomerCreateParams = {
    description: 'test customer',
  };

  const customer: Stripe.Customer = await stripe.customers.create(params);

  console.log(customer.id);
};
createCustomer();
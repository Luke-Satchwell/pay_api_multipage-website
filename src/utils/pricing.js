export const pricing_plans = [
  {
    name: 'free',
    title: 'Free Plan',
    desc: 'Build and test using our core set of products with up to 100 API requests ',
    price: 0,
    items: ['Transactions', 'Auth', 'Identity'],
  },
  {
    name: 'basic',
    title: 'Basic Plan',
    desc: 'Launch your project with unlimited requests and no contractual minimums ',
    price: 249,
    items: ['Transactions', 'Auth', 'Identity', 'Investments', 'Assets'],
  },
  {
    name: 'premium',
    title: 'Premium Plan',
    desc: 'Get tailored solutions, volume pricing, and dedicated support for your team ',
    price: 499,
    items: [
      'Transactions',
      'Auth',
      'Identity',
      'Investments',
      'Assets',
      'Liabilities',
      'Income',
    ],
  },
]

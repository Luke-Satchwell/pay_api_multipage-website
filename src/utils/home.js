import mockup from '../assets/home/illustration-phone-mockup.svg'

import finances from '../assets/home/icon-personal-finances.svg'
import banking from '../assets/home/icon-banking-and-coverage.svg'
import payments from '../assets/home/icon-consumer-payments.svg'

export const heroHome = [
  {
    id: 'hero',
    image: mockup,
    title: 'Start building with our APIs for absolutely free.',
  },
]

export const partnersText = [
  {
    name: 'partners',
    title: 'Who we work with',
    desc: 'Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. ',
  },
]

export const features = [
  {
    icon: finances,
    title: 'Personal Finances',
    desc: 'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ',
  },
  {
    icon: banking,
    title: 'Banking and Coverage',
    desc: 'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.',
  },
  {
    icon: payments,
    title: 'Consumer Payments',
    desc: 'It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.',
  },
]

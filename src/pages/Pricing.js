import React from 'react';
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate(); // navigation
   const plans = [
  {
    name: 'Starter',
    price: '$49',
    description: 'Perfect for new small businesses.',
    features: ['LLC Formation', 'Basic Compliance Alerts', 'Email Support','Process the LLC within two weeks'],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$99',
    description: 'Ideal for growing businesses.',
    features: [
      'Everything in Starter',
      'Operating Agreement',
      'EIN Registration',
      'Priority Support',
      'Process the LLC within two business days'
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$199',
    description: 'Advanced features for large businesses.',
    features: [
      'Everything in Pro',
      'Custom Legal Documents',
      'Dedicated Account Manager',
      '24/7 Support',
      'Process the LLC within two business days'
    ],
    popular: false,
  },
];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose your Plan</h2>
        <p className="mt-4 text-gray-600">
          Whether you are starting out or scaling up, there is a plan designed for you.
        </p>
      </div>

      {/* Pricing Cards */}

       <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-6 bg-white shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_20px_rgba(251,133,0,0.5)] ${
                plan.popular
                  ? 'border-[#fb8500] ring-2 ring-[#fb8500]'
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="mb-4">
                  <span className="inline-block bg-[#fb8500]/10 text-[#fb8500] text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  {plan.description}
                </p>
                <div className="mt-4 text-3xl font-bold text-gray-900">
                  {plan.price}
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-[#fb8500] mt-1 mr-2 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button
               onClick={() => navigate("/contact")}
                className={`mt-8 w-full py-2 px-4 rounded-md font-semibold transition-all duration-300 shadow-md ${
                  plan.popular
                    ? 'bg-[#fb8500] text-black hover:bg-black hover:text-[#fb8500] hover:shadow-[0_0_15px_#fb8500]'
                    : 'bg-gray-800 text-white hover:bg-[#fb8500] hover:text-black hover:shadow-[0_0_15px_#fb8500]'
                }`}
              >
                Get Started
              </button>             
            </div>
          ))}
        </div>
      
      {/* FAQ Section */}
      <div className="mt-24 max-w-3xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-10 text-center text-gray-800">Frequently Asked Questions</h3>

        <div className="space-y-8">
          <div>
            <h4 className="font-semibold text-lg text-gray-800">Can I cancel my plan anytime?</h4>
            <p className="text-gray-600 mt-2 text-sm">
              Yes, you can cancel or downgrade your plan anytime through your dashboard settings.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-gray-800">Do you offer refunds?</h4>
            <p className="text-gray-600 mt-2 text-sm">
              We offer a 7-day refund policy for new users. Contact support if you need assistance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-gray-800">What payment methods do you accept?</h4>
            <p className="text-gray-600 mt-2 text-sm">
              We accept major credit cards, PayPal, and bank transfers for yearly plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

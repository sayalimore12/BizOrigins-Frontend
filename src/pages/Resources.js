import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const resources = [
  {
    id: 'guides',
    title: 'Guides & Tutorials',
    content: (
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">LLC Formation Guides</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>How to File an LLC in Your State</strong> <br />Learn the essential steps to register your LLC with your state, including selecting a business name, appointing a registered agent, and submitting your Articles of Organization. Our step-by-step guidance makes it easy, no matter where you’re located.</li>
          <li><strong>Step-by-Step Business Formation Checklist</strong><br />Get a complete startup checklist to ensure you don’t miss any important legal or financial steps—from obtaining your EIN to opening a business bank account. Ideal for first-time founders who want a clear roadmap.</li>
          <li><strong>LLC vs Sole Proprietorship vs Corporation</strong><br />Compare the pros and cons of different business structures. Understand which is best for your goals—whether you're looking for simplicity, liability protection, or investment opportunities.</li>
          <li><strong>Understanding Operating Agreements</strong><br />Discover why an operating agreement is a crucial document for your LLC—even if your state doesn’t require one. We break down what it includes and how it helps define roles, responsibilities, and ownership.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'templates',
    title: 'Business Templates',
    content: (
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Free Downloadable Templates</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>LLC Operating Agreement Template (PDF/Word)</strong><br />Create a professional and legally sound operating agreement with our free downloadable template. Available in both PDF and Word formats, it outlines member roles, responsibilities, profit distribution, and dispute resolution terms—perfect for both single and multi-member LLCs.</li>
          <li><strong>Business Plan Template</strong><br />Lay the groundwork for your company’s success with a structured business plan. This easy-to-use template includes sections for market analysis, marketing strategy, financial projections, and more—ideal for funding, partnerships, or internal strategy.</li>
          <li><strong>Invoice Template</strong><br />Speed up your billing process with a clean, customizable invoice template. Include your branding, services, payment terms, and due dates—great for freelancers, consultants, and small businesses.</li>
          <li><strong>Non-Disclosure Agreement (NDA)</strong><br />Protect your business ideas and confidential information with a ready-to-use NDA. Use this template when discussing partnerships, sharing trade secrets, or working with contractors to ensure your information stays private.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'tax',
    title: 'Tax Resources',
    content: (
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Tax Help for LLCs</h2>
        <p className="text-gray-700 mb-2">
          Understanding how your LLC is taxed can save you time and money.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>LLC Tax Classification (Single-member, Multi-member, S-Corp)</strong><br />Explore how your LLC can be taxed by default or by election. Learn the differences between single-member (disregarded entity), multi-member (partnership), and electing S-Corp status—so you can choose the option that best fits your business and financial goals.</li>
          <li><strong>How to File Taxes as an LLC</strong><br />A step-by-step overview of how LLCs file federal and state taxes based on their classification. This guide covers key forms, deadlines, and deductions available to small business owners.</li>
          <li><strong>Estimated Quarterly Payments Guide</strong><br />Avoid penalties and stay compliant by learning how and when to pay quarterly estimated taxes. This guide explains how to calculate what you owe, due dates, and how to submit payments to the IRS.</li>
          <li><strong>Choosing an Accountant or CPA</strong><br />Find out what to look for when hiring a tax professional. We cover key questions to ask, red flags to avoid, and how the right accountant can help you save money and reduce risk.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'legal',
    title: 'Legal Documents',
    content: (
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Essential Legal Forms</h2>
        <p className="text-gray-700">
          Browse downloadable legal documents commonly needed for LLC operation.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
          <li><strong>LLC Operating Agreement</strong><br />Define the structure and rules of your LLC with this essential internal document. Our template covers member duties, profit sharing, decision-making authority, and more—crucial for both single- and multi-member LLCs.</li>
          <li><strong>Partnership Agreement</strong><br />Set clear terms with your business partners to prevent disputes down the road. This template outlines each partner’s contributions, responsibilities, and how profits and losses will be divided.</li>
          <li><strong>Registered Agent Consent Form</strong><br />This document provides written consent from your chosen registered agent—required in many states to complete your LLC formation. It confirms their agreement to receive legal and government documents on your behalf.</li>
          <li><strong>LLC Articles of Amendment</strong><br />Need to update your LLC’s name, address, or members? Use this form to file official changes with the state. Our guide and template help ensure your business info stays accurate and compliant.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'blog',
    title: 'Blog & Articles',
    content: (
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">From Our Blog</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Top 5 Mistakes New Business Owners Make</strong><br />Avoid common pitfalls that many entrepreneurs face in their first year. From underestimating taxes to skipping legal paperwork, this article helps you start strong with practical advice.</li>
          <li><strong>When to Upgrade to an S-Corp</strong><br />Thinking of electing S-Corp status for your LLC? Learn when it makes financial and legal sense, how to file, and what pros and cons to consider for your specific business goals.</li>
          <li><strong>Annual Compliance Tips for 2025</strong><br />Stay on top of your legal and tax obligations in 2025. This guide covers key filing dates, renewal requirements, and helpful checklists to keep your LLC in good standing.</li>
          <li><strong>LLC Myths You Should Ignore</strong><br />Not everything you hear about LLCs is true. We debunk popular myths about liability, taxes, and paperwork—so you can make decisions based on facts, not fear.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'support',
    title: 'Support & Help Center',
    content: (
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Need Help?</h2>
        <p className="text-gray-700 mb-2">We’re here to guide you!</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Contact Support</strong><br />Reach out to our expert support team for personalized assistance via email or phone. We’re ready to answer your business formation and compliance questions.</li>

          <li><strong>Knowledge Base</strong><br />Explore step-by-step guides, FAQs, and how-to articles covering LLC formation, taxes, documents, and more—accessible anytime.</li>
          <li><strong>Schedule a Free Consultation</strong><br />Need expert advice? Book a free 15-minute consultation with one of our business specialists to discuss your goals, options, and next steps.</li>
        </ul>
      </div>
    ),
  },
];

const Resources = () => {
  const [selected, setSelected] = useState(resources[0].id);
  const current = resources.find((r) => r.id === selected);
  const navigate = useNavigate(); // navigation

 return (
    <section>
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-lg text-gray-600 mb-10">
            Helpful guides, templates, and tools to make your business journey simple and smooth.
          </p>
        </div>

        {/* Sidebar + Content */}
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sidebar */}
          <aside
            className="md:w-1/4 w-full mb-10 md:mb-0 md:mr-10
                       bg-gray-50 border-r-4 border-[#fb8500] p-6 rounded-l-lg"
          >
            <h3 className="text-xl font-bold mb-6 text-gray-900">Categories</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setSelected(item.id)}
                    className={`w-full text-left font-medium px-3 py-2 rounded-md transition-all duration-200
                      ${selected === item.id
                        ? 'bg-[#fb8500] text-black shadow-md'
                        : 'text-gray-700 hover:bg-[#fb8500]/10 hover:text-[#fb8500]'
                      }`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content Area */}
          <main className="flex-1">{current?.content}</main>
        </div>
      </div>
    </section>
  );
};

export default Resources;

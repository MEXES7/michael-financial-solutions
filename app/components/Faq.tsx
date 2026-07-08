"use client";
import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I open an account?",
      answer:
        'Opening an account is easy! Click the "Open Account" button, fill out the online form with your details, verify your identity, and you\'ll be ready to bank with us within minutes.',
    },
    {
      question: "What are your interest rates?",
      answer:
        "Our savings accounts offer competitive rates up to 4.5% APY. Loan rates vary based on creditworthiness and loan type.",
    },
    {
      question: "Is online banking secure?",
      answer:
        "We use 256-bit encryption, two-factor authentication, and continuous fraud monitoring to ensure your accounts and data are always protected.",
    },
    {
      question: "How can I contact support?",
      answer:
        "Our support team is available 24/7 via live chat, email, or phone.",
    },
  ];

  return (
    <section className="faq section" id="faq" aria-labelledby="faq-title">
      <div className="container container-narrow">
        <div className="section-header">
          <h2 className="section-title" id="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="section-desc">
            Find answers to common questions about our services.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="faq-item animate-on-scroll">
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`faq-icon transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="faq-answer" id="faq-answer-1">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;

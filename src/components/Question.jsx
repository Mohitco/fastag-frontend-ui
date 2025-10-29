import { useState } from "react";

export default function Question() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is FASTag?",
      answer:
        "FASTag is an electronic toll collection system operated by NHAI. It uses RFID technology to make toll payments directly from your prepaid account linked to the FASTag.",
    },
    {
      question: "How can I recharge my FASTag on Logiclead?",
      answer:
        "Simply log in to your Logiclead account, enter your vehicle details, choose your payment method, and complete the transaction securely within seconds.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept all major payment options including credit/debit cards, UPI, net banking, and digital wallets for your convenience.",
    },
    {
      question: "Is there any minimum recharge amount?",
      answer:
        "The minimum recharge amount depends on your issuing bank, but generally it starts from ₹100.",
    },
    {
      question: "How long does it take for the recharge to reflect?",
      answer:
        "In most cases, recharge is reflected instantly. However, it might take a few minutes depending on your bank or network condition.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-white py-16 px-6 sm:px-12 md:px-20 text-gray-800"
    >
      <h2 className="text-3xl font-bold text-black text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-4 transition-all duration-300"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              {faq.question}
              <span className="text-2xl font-bold text-black">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`mt-2 text-gray-600 text-base overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

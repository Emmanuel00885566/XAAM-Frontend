const faqs = [
  "What is this Xaam about?",
  "How do I start practicing?",
  "Are the questions similar to real exams?",
];

const FAQ = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-center text-xl font-semibold">
          FAQ
        </h2>

        <div className="mt-8 space-y-4">
          {faqs.map((q, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg flex justify-between items-center shadow-sm"
            >
              <p>{q}</p>
              <span className="text-blue-600 text-xl">+</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
const testimonials = [
  {
    name: "Olatayo K.",
    text: "This platform made preparing for UTME way easier.",
  },
  {
    name: "Blessing E.",
    text: "The leaderboard kept me motivated.",
  },
  {
    name: "Tunde O.",
    text: "Honestly one of the best tools for Post-UTME.",
  },
  {
    name: "Fatima S.",
    text: "Everything is organized, makes studying stress-free.",
  },
  {
    name: "Chinedu K.",
    text: "Explanations are clear and easy to understand.",
  },
  {
    name: "Steve J.",
    text: "Mock tests improved my speed and confidence.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <h2 className="text-center text-xl md:text-2xl font-semibold">
          REAL Results from REAL Students
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="p-4 border rounded-xl shadow-sm"
            >
              <p className="text-gray-600 text-sm">
                {item.text}
              </p>

              <h4 className="mt-3 font-semibold text-blue-600">
                {item.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
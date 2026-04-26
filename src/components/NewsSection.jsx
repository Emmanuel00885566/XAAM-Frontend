const news = [
  {
    title: "2026 UTME result has been released",
    text: "Just concluded UTME exam result has been released",
  },
  {
    title: "JAMB has opened the admission portal",
    text: "Admission portal has just been opened",
  },
  {
    title: "Robotics Engineering added to syllabus",
    text: "New subject added to curriculum",
  },
  {
    title: "Cut-Off mark for federal universities is out",
    text: "Check new cut-off marks",
  },
  {
    title: "Private Universities started giving admission",
    text: "Admissions ongoing",
  },
  {
    title: "Low performance in UTME in recent years",
    text: "Students records show decline",
  },
];

const NewsSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <h2 className="text-center text-xl md:text-2xl font-semibold">
          Get the Latest <span className="text-blue-600">NEWS</span> Updates
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Stay informed with updates and announcements
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {news.map((item, i) => (
            <div
              key={i}
              className="border border-blue-200 p-4 rounded-xl bg-white hover:shadow-md transition"
            >
              <h3 className="font-semibold text-blue-600">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {item.text}
              </p>

              <button className="mt-3 text-sm text-blue-600">
                Learn More →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsSection;
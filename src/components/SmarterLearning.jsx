import illustration from "../assets/images/location.png"; // your image

const SmarterLearning = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
            Bring Smarter Learning to Your Location.
          </h2>

          <p className="mt-4 text-gray-600">
            Join a growing network of universities using smarter learning tools.
            Request your institution to get started.
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Bring this to your Location →
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img
            src={illustration}
            alt="location"
            className="w-[260px] sm:w-[320px] md:w-[400px]"
          />
        </div>

      </div>
    </section>
  );
};

export default SmarterLearning;
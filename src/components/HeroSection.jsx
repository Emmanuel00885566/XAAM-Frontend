import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "../assets/images/Hero.jpg";
import RecHeroImage from "../assets/images/RecHero.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#f8fbff]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-16 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg text-center md:text-left"
        >
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-gray-900">
            Your all-in-one <br />
            <span className="text-blue-600">Learning and Exam</span> <br />
            prep platform
          </h1>

          <p className="mt-5 text-gray-500 text-[15px] md:text-[17px] leading-[1.7] max-w-md mx-auto md:mx-0">
            Learn smarter, practice more, and ace your exams with tools designed for your success.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center md:items-start gap-3">
            <button
              onClick={() => navigate("/home")}
              className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-blue-700"
            >
              Get Started Free
            </button>

            <button
              onClick={() => navigate("/practice")}
              className="w-full sm:w-auto border border-blue-600 text-blue-600 px-6 py-3 rounded-xl text-sm font-medium hover:bg-blue-50"
            >
              Practice Mode
            </button>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <img
            src={RecHeroImage}
            alt="bg"
            className="absolute w-[420px] md:w-[520px] top-4 md:top-2 opacity-80 z-0"
          />

          <img
            src={heroImage}
            alt="hero"
            className="relative w-[300px] sm:w-[360px] md:w-[420px] z-10 object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
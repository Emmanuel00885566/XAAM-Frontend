import { useNavigate } from "react-router-dom";
import heroImage from "../assets/images/Hero.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center md:text-left">
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            Learning and exam prep platform for students
          </h1>

          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Practice past questions, take mock exams, and track your progress with ease.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row items-center md:items-start gap-4">
            
            <button
              onClick={() => navigate("/home")}
              className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300"
            >
              Get Started Free
            </button>

            <button
              onClick={() => navigate("/practice")}
              className="w-full sm:w-auto border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-all duration-300"
            >
              Practice Mode
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Learning illustration"
            className="w-[280px] sm:w-[340px] md:w-[440px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
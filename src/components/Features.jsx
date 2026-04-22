import everythingBg from "../assets/images/EVERYTHINGyouneed.png";
import frameImage from "../assets/icons/Frame.svg";

const features = [
  { name: "Get Started", link: "/get-started" },
  { name: "Practice PQs", link: "/practice" },
  { name: "Mock Test", link: "/mock" },
  { name: "Flash Cards", link: "/flash" },
  { name: "MCQs", link: "/mcq" },
  { name: "Courses", link: "/courses" },
  { name: "Data", link: "/data" },
  { name: "News", link: "/news" },
];

const Features = () => {
  return (
    <section
      className="px-6 md:px-16 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${everythingBg})` }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
        EVERYTHING you need to succeed
      </h2>

      <p className="text-center text-gray-500 mt-2">
        Powerful tools to help you learn, practice and ace your exams
      </p>

      {/* FRAME CONTAINER */}
      <div className="relative mt-10 max-w-4xl mx-auto">
        
        {/* Background Frame */}
        <img src={frameImage} alt="Features" className="w-full" />

        {/* Overlay Grid (Clickable Areas) */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              onClick={() => console.log(item.name)}
              className="cursor-pointer hover:bg-blue-500/10 transition"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
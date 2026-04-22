import everythingBg from "../assets/icons/EVERYTHINGyouneed.svg";
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
    <section className="px-6 md:px-16 py-16 bg-gray-50">
      
      {/* TOP IMAGE (NOT BACKGROUND!) */}
      <div className="flex justify-center">
        <img
          src={everythingBg}
          alt="Everything you need"
          className="w-full max-w-4xl"
        />
      </div>

      {/* FRAME SECTION */}
      <div className="relative mt-10 max-w-4xl mx-auto">
        
        {/* Frame */}
        <img src={frameImage} alt="Features Frame" className="w-full" />

        {/* Clickable overlay */}
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
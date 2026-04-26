import communityImg from "../assets/images/community.png";

const Community = () => {
  return (
    <section className="bg-blue-100 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-10">

        <div className="max-w-md text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-blue-700">
            Growing Student Community
          </h2>

          <p className="mt-3 text-gray-600">
            Empowering students with smarter tools for UTME and Post-UTME success.
          </p>

          <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg">
            Join the Xaam Community →
          </button>
        </div>

        <img
          src={communityImg}
          alt="community"
          className="w-[250px] md:w-[350px]"
        />

      </div>
    </section>
  );
};

export default Community;
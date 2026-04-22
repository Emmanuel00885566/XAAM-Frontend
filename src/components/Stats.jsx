const Stats = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-16 py-10 text-center">
      
      <div>
        <h2 className="text-2xl font-bold text-blue-600">50+</h2>
        <p className="text-gray-600">Courses</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-blue-600">12k+</h2>
        <p className="text-gray-600">Students</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-blue-600">2024</h2>
        <p className="text-gray-600">Started</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-blue-600">5000+</h2>
        <p className="text-gray-600">Exams Practiced</p>
      </div>

    </section>
  );
};

export default Stats;
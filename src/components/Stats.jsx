import { BookOpen, Users, Calendar, ClipboardCheck } from "lucide-react";

const Stats = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-12">
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        <div className="flex flex-col items-center">
          <BookOpen className="text-blue-600 mb-2" size={28} />
          <h2 className="text-2xl font-bold text-blue-600">50+</h2>
          <p className="text-gray-500 text-sm mt-1">Courses</p>
        </div>

        <div className="flex flex-col items-center">
          <Users className="text-blue-600 mb-2" size={28} />
          <h2 className="text-2xl font-bold text-blue-600">12k+</h2>
          <p className="text-gray-500 text-sm mt-1">Students</p>
        </div>

        <div className="flex flex-col items-center">
          <Calendar className="text-blue-600 mb-2" size={28} />
          <h2 className="text-2xl font-bold text-blue-600">2024</h2>
          <p className="text-gray-500 text-sm mt-1">Started</p>
        </div>

        <div className="flex flex-col items-center">
          <ClipboardCheck className="text-blue-600 mb-2" size={28} />
          <h2 className="text-2xl font-bold text-blue-600">5000+</h2>
          <p className="text-gray-500 text-sm mt-1">Exams Practiced</p>
        </div>

      </div>

    </section>
  );
};

export default Stats;
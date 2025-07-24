import { Calendar, BookOpen, Lightbulb } from "lucide-react"

export default function ReflectivePractice() {
  const reflections = [
    {
      date: "February 2025",
      title: "Animation and Transition in PowerPoint Presentation",
      excerpt:
        "Reflecting on my lesson teaching J.H.S 3 students about PowerPoint animations and transitions. The systematic approach and practical demonstrations helped students understand complex concepts...",
      category: "ICT Education",
    },
    {
      date: "January 2025",
      title: "Student Engagement Through Interactive Learning",
      excerpt:
        "Discovering how hands-on activities and real-life examples increase student participation and understanding in computing lessons...",
      category: "Teaching Methods",
    },
    {
      date: "December 2024",
      title: "From Known to Unknown: Practical Application",
      excerpt:
        "Examining how linking new concepts to students' prior knowledge creates more effective learning experiences in ICT education...",
      category: "Learning Theory",
    },
  ]

  return (
    <section id="reflective" className="py-20 bg-gradient-to-br from-teal-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Reflective Practice</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous reflection is essential for effective teaching. Here are my thoughts, insights, and learning
            moments from my educational journey during my internship at Tanoso Anglican JHS 'A'.
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex items-center mb-6">
              <Lightbulb className="w-8 h-8 text-orange-500 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800">Why Reflection Matters</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Reflective practice is essential for professional growth and student success. Through regular reflection,
              I examine my teaching methods, assess student outcomes, and continuously improve my approach to ICT
              education.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Each reflection helps me understand what works, what doesn't, and how I can better serve my students.
              During my internship, this process was guided by Dr. Oliver Kuffor Boansi and mentored by Mrs. Mary Nimoh,
              helping me develop as an effective educator.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {reflections.map((reflection, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {reflection.date}
                </div>
                <span className="inline-block bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full mb-3">
                  {reflection.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-200">
                  {reflection.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{reflection.excerpt}</p>
                <button className="flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Featured Reflection: Animation and Transition Lesson
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-teal-600 mb-3">Lesson Overview</h4>
                <p className="text-gray-700 mb-4">
                  On February 22nd, 2025, I taught J.H.S 3(3A) students about Animation and Transition in PowerPoint
                  presentations. The 50-minute lesson focused on practical demonstrations and hands-on learning.
                </p>
                <h4 className="text-lg font-semibold text-orange-500 mb-3">Key Strengths</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Systematic lesson presentation as planned</li>
                  <li>• Active student engagement throughout</li>
                  <li>• Effective use of practical demonstrations</li>
                  <li>• Strong classroom management</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-teal-600 mb-3">Learning Insights</h4>
                <p className="text-gray-700 mb-4">
                  Students learn best when lessons are linked to practical examples and when they are actively involved
                  in the learning process. The hands-on approach to PowerPoint animations significantly improved
                  comprehension.
                </p>
                <h4 className="text-lg font-semibold text-orange-500 mb-3">Areas for Growth</h4>
                <p className="text-gray-700">
                  I identified the need to ensure questions are more evenly distributed among students due to time
                  constraints. This reflection has shaped my approach to time management in subsequent lessons.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Join My Learning Journey</h3>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              As a developing educator, I believe in the power of shared learning and continuous improvement. If you're
              an educator or someone interested in ICT education, I'd love to connect and learn together.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-700 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

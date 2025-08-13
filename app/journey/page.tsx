import Link from "next/link"
import { BookOpen, Camera, FileText, GraduationCap, Video, BookOpenCheck } from "lucide-react"
import Footer from "@/components/footer"

export default function JourneyPage() {
  const journeyItems = [
    {
      title: "Teaching Philosophy",
      description: "Explore my educational beliefs and approach to student-centered learning",
      icon: BookOpen,
      href: "/journey/philosophy",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Reflective Practice",
      description: "Insights and learning moments from my teaching experiences",
      icon: FileText,
      href: "/journey/reflective-practice",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Photo Gallery",
      description: "Visual journey through my teaching experiences and student interactions",
      icon: Camera,
      href: "/journey/gallery",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Curriculum Vitae",
      description: "My educational background, experience, and professional achievements",
      icon: GraduationCap,
      href: "/journey/cv",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Teaching Materials",
      description: "Exercise books, assignments, and educational resources I've created",
      icon: BookOpenCheck,
      href: "/journey/materials",
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "Teaching Videos",
      description: "Watch my teaching demonstrations and educational content",
      icon: Video,
      href: "/journey/videos",
      color: "from-red-500 to-red-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">My Journey</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Explore the different facets of my educational journey, from teaching philosophy to practical experiences.
            Each section tells a story of growth, learning, and dedication to inspiring minds.
          </p>
        </div>
      </section>

      {/* Journey Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journeyItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className="p-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} mb-6`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  <div className="mt-6 flex items-center text-teal-600 font-semibold">
                    <span>Explore</span>
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

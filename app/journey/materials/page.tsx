import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BookOpen, FileText } from "lucide-react"
import Footer from "@/components/footer"

export default function MaterialsPage() {
  const exerciseBooks = [
    {
      id: 1,
      title: "Safety Precautions for ICT Tools",
      description: "Homework assignment covering safety measures when using ICT equipment",
      image: "/images/exercise-book-1.jpg",
      date: "27/01/2025",
    },
    {
      id: 2,
      title: "Text Editing and Formatting",
      description: "Assignment on editing concepts, alignment types, and keyboard shortcuts",
      image: "/images/exercise-book-2.jpg",
      date: "21/01/2024",
    },
    {
      id: 3,
      title: "Computer Networks",
      description: "Exercise covering network definitions, types (PAN, WAN, LAN), and concepts",
      image: "/images/exercise-book-3.jpg",
      date: "11/02/2025",
    },
    {
      id: 4,
      title: "Desktop Components",
      description: "Detailed study of desktop elements and computer interface components",
      image: "/images/exercise-book-4.jpg",
      date: "12/11/2024",
    },
    {
      id: 5,
      title: "Health Hazards in ICT",
      description: "Assignment on health and safety issues associated with ICT tools usage",
      image: "/images/exercise-book-5.jpg",
      date: "21/01/2025",
    },
    {
      id: 6,
      title: "Text Formatting and Borders",
      description: "Exercise on font colors, borders, and text enhancement techniques",
      image: "/images/exercise-book-6.jpg",
      date: "24/01/2025",
    },
    {
      id: 7,
      title: "Computer Systems Quiz",
      description: "Multiple choice questions on BIOS, storage devices, and system components",
      image: "/images/exercise-book-7.jpg",
      date: "Assessment",
    },
    {
      id: 8,
      title: "Email Communication",
      description: "Exercise on email concepts, addressing, and electronic communication",
      image: "/images/exercise-book-8.jpg",
      date: "21st March, 2025",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/journey" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to My Journey
          </Link>
        </div>
      </div>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 mb-6">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Teaching Materials</h1>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the exercise books, assignments, and educational materials I've created during my teaching
              journey. These materials showcase practical ICT education and hands-on learning approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {exerciseBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm font-medium">{book.date}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{book.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Educational Impact</h3>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                These materials represent hands-on learning experiences designed to make ICT education practical and
                engaging. Each exercise book contains carefully crafted assignments that help students understand
                complex technology concepts through real-world applications and interactive learning.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">{exerciseBooks.length}</div>
                  <div className="text-gray-600">Exercise Books</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                  <div className="text-gray-600">Topics Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">40+</div>
                  <div className="text-gray-600">Students Impacted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

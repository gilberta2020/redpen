import Image from "next/image"
import { GraduationCap, Users } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome! I'm Gilbert Yeboah, a passionate ICT educator currently pursuing my BSc in Information Technology
              Education at Akenten Appiah-Menka University of Skills Training and Entrepreneurial Development. I believe
              that technology education is the key to unlocking students' potential in our digital age.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              During my recent internship at Tanoso Anglican JHS 'A', I had the privilege of teaching computing lessons
              and engaging with students through innovative teaching methods. I specialize in making technology
              accessible and exciting for young learners, using practical demonstrations and interactive learning
              approaches.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              My approach combines theoretical knowledge with hands-on practice, creating dynamic learning environments
              where students feel empowered to explore technology, ask questions, and develop critical thinking skills
              essential for the digital future.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <GraduationCap className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800">3 Months</h3>
                <p className="text-sm text-gray-600">Teaching Experience</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800">40 Students</h3>
                <p className="text-sm text-gray-600">Lives Impacted</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/gilbert-students-stadium.jpg"
                alt="Gilbert Yeboah with students"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-teal-200 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

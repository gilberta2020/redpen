import Link from "next/link"
import { ArrowLeft, Play, Youtube, ExternalLink } from "lucide-react"
import Footer from "@/components/footer"

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
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
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 mb-6">
              <Play className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Teaching Videos</h1>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch my teaching demonstrations and educational content. These videos showcase my teaching methods and
              provide insights into my approach to ICT education.
            </p>
          </div>

          {/* Featured Video */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/nnDWGEmY5r0"
                  title="Gilbert Yeboah Teaching Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Featured Teaching Demonstration</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  This video showcases my teaching methodology and classroom management skills during an ICT lesson.
                  You'll see how I engage students, explain complex concepts, and create an interactive learning
                  environment.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://youtu.be/nnDWGEmY5r0?si=4_z8Tu4M-t2dpMWj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <Youtube className="w-5 h-5 mr-2" />
                    Watch on YouTube
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Video Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Interactive Teaching</h3>
              <p className="text-gray-600">
                See how I engage students through interactive demonstrations and hands-on learning approaches.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Youtube className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Real Classroom</h3>
              <p className="text-gray-600">
                Authentic classroom footage showing real teaching scenarios and student interactions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Educational Content</h3>
              <p className="text-gray-600">
                Quality educational content designed to inspire and inform fellow educators and students.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to My YouTube Channel</h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Stay updated with my latest teaching videos, educational content, and insights into ICT education. Join
              our community of learners and educators!
            </p>
            <Link
              href="https://youtube.com/@yeboahgilbert3807?si=D8qcCXfA2d9DTbith"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Youtube className="w-6 h-6 mr-3" />
              Subscribe Now
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Play, Camera, Users, BookOpen, Award } from "lucide-react"

interface GalleryItem {
  id: number
  src: string
  alt: string
  category: string
  title: string
  description: string
  type: "image" | "video"
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/gilbert-teaching-classroom.jpg",
    alt: "Gilbert teaching in classroom",
    category: "Teaching Moments",
    title: "Classroom Instruction",
    description: "Delivering ICT lessons to J.H.S students at Tanoso Anglican JHS",
    type: "image",
  },
  {
    id: 2,
    src: "/images/gilbert-classroom-teaching.jpg",
    alt: "Gilbert engaging with students",
    category: "Teaching Moments",
    title: "Student Engagement",
    description: "Interactive teaching session with students in computing class",
    type: "image",
  },
  {
    id: 3,
    src: "/images/gilbert-lesson-planning.jpg",
    alt: "Gilbert doing lesson planning",
    category: "Professional Development",
    title: "Lesson Planning",
    description: "Preparing lesson notes and materials for effective teaching",
    type: "image",
  },
  {
    id: 4,
    src: "/images/gilbert-checkers.jpg",
    alt: "Gilbert playing educational games with students",
    category: "Student Engagement",
    title: "Educational Games",
    description: "Using games as a tool for learning and building relationships",
    type: "image",
  },
  {
    id: 5,
    src: "/images/gilbert-student-athletes.jpg",
    alt: "Gilbert with student athletes",
    category: "Student Support",
    title: "Athletic Support",
    description: "Supporting students in track and field competitions",
    type: "image",
  },
  {
    id: 6,
    src: "/images/gilbert-athletics.jpg",
    alt: "Gilbert at athletics event",
    category: "Student Support",
    title: "Sports Day",
    description: "Encouraging students during inter-school athletics competition",
    type: "image",
  },
  {
    id: 7,
    src: "/images/gilbert-students-event.jpg",
    alt: "Gilbert with students at event",
    category: "Student Engagement",
    title: "School Events",
    description: "Participating in school activities and building community",
    type: "image",
  },
  {
    id: 8,
    src: "/images/gilbert-colleagues.jpg",
    alt: "Gilbert with educational colleagues",
    category: "Professional Development",
    title: "Professional Collaboration",
    description: "Working with fellow educators and mentors",
    type: "image",
  },
  {
    id: 9,
    src: "/images/gilbert-faculty.jpg",
    alt: "Gilbert with faculty members",
    category: "Professional Development",
    title: "Faculty Engagement",
    description: "Collaborating with educational professionals and mentors",
    type: "image",
  },
  {
    id: 10,
    src: "/images/gilbert-students-stadium.jpg",
    alt: "Gilbert with students at stadium",
    category: "Student Support",
    title: "Mentoring Students",
    description: "Building relationships beyond the classroom environment",
    type: "image",
  },
]

const categories = [
  { name: "All", icon: Camera, count: galleryItems.length },
  {
    name: "Teaching Moments",
    icon: BookOpen,
    count: galleryItems.filter((item) => item.category === "Teaching Moments").length,
  },
  {
    name: "Student Engagement",
    icon: Users,
    count: galleryItems.filter((item) => item.category === "Student Engagement").length,
  },
  {
    name: "Professional Development",
    icon: Award,
    count: galleryItems.filter((item) => item.category === "Professional Development").length,
  },
  {
    name: "Student Support",
    icon: Users,
    count: galleryItems.filter((item) => item.category === "Student Support").length,
  },
]

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Photo Gallery</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A visual journey through my teaching experiences, student interactions, and professional development
            moments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.name
                  ? "bg-teal-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-teal-100 hover:text-teal-700"
              }`}
            >
              <category.icon className="w-5 h-5 mr-2" />
              {category.name}
              <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
              <div className="p-4">
                <span className="inline-block bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="relative aspect-video">
                  {selectedImage.type === "video" ? (
                    <video
                      controls
                      className="w-full h-full object-cover"
                      src={selectedImage.src.replace("/images/", "/videos/").replace(".jpg", ".mov")}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={selectedImage.src || "/placeholder.svg"}
                      alt={selectedImage.alt}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{selectedImage.title}</h3>
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                      {selectedImage.category}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-16 bg-gradient-to-r from-teal-50 to-orange-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Gallery Highlights</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">{galleryItems.length}</div>
              <div className="text-gray-600">Total Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {galleryItems.filter((item) => item.category === "Teaching Moments").length}
              </div>
              <div className="text-gray-600">Teaching Moments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">
                {galleryItems.filter((item) => item.category === "Student Engagement").length}
              </div>
              <div className="text-gray-600">Student Activities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">3</div>
              <div className="text-gray-600">Months Documented</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

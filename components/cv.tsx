"use client"

import { Download, Eye, FileText, Award, GraduationCap, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CV() {
  const handleDownload = () => {
    // In a real application, this would trigger a PDF download
    alert("CV download would start here. Please upload your actual CV PDF to implement this feature.")
  }

  const handleView = () => {
    // In a real application, this would open the CV in a new tab
    alert("CV viewer would open here. Please upload your actual CV PDF to implement this feature.")
  }

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        "BSc Information Technology Education - Akenten Appiah-Menka University (2022-Present)",
        "WASSCE General Arts - Martin Luther Senior High School (2017-2020)",
        "BECE - Asotwe M/A Junior High School (2015-2017)",
      ],
    },
    {
      icon: Briefcase,
      title: "Experience",
      items: [
        "ICT Facilitator - Tanoso Anglican JHS 'A' (Internship 2025)",
        "IT Support & Developer - Binary Technology Consult",
        "Database Administrator - Beautiful Beginnings International School",
      ],
    },
    {
      icon: Award,
      title: "Skills & Competencies",
      items: [
        "Effective Communication & Creative Problem-solving",
        "Team Leadership & Innovation",
        "Software Development & Website Management",
        "Database Management & IT Support",
      ],
    },
  ]

  return (
    <section id="cv" className="py-20 bg-gradient-to-br from-orange-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Curriculum Vitae</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my educational journey, professional experience, and achievements in ICT education and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {highlights.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-teal-100 to-orange-100 p-3 rounded-full mr-4">
                  <section.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700 text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-br from-teal-100 to-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Complete CV</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Download or view my complete curriculum vitae for detailed information about my educational background,
              work experience, skills, and professional development in ICT education.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleView}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Eye className="w-5 h-5 mr-2" />
              View CV Online
            </Button>
            <Button
              onClick={handleDownload}
              variant="outline"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center bg-transparent"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </Button>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <h4 className="font-bold text-gray-800 mb-3 text-center">CV Highlights</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <strong>Specialization:</strong> Information Technology Education, Computing, Software Development
              </div>
              <div>
                <strong>Current Status:</strong> Final Year Student & ICT Educator
              </div>
              <div>
                <strong>Languages:</strong> English (Fluent), Twi (Fluent)
              </div>
              <div>
                <strong>Last Updated:</strong> January 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

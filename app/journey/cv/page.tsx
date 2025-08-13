import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import CV from "@/components/cv"
import Footer from "@/components/footer"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-teal-50">
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/journey" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to My Journey
          </Link>
        </div>
      </div>
      <CV />
      <Footer />
    </div>
  )
}

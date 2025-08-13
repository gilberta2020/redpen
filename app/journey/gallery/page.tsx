import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PhotoGallery from "@/components/photo-gallery"
import Footer from "@/components/footer"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/journey" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to My Journey
          </Link>
        </div>
      </div>
      <PhotoGallery />
      <Footer />
    </div>
  )
}

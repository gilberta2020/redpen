import Image from "next/image"
import Link from "next/link"
import { Youtube, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/gilbert-logo.jpg"
                alt="Gilbert Yeboah Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-bold">Gilbert Yeboah</h3>
                <p className="text-gray-400">ICT Educator & Technology Enthusiast</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Passionate about inspiring minds and building futures through innovative ICT education. Empowering
              students with technology skills for the digital age.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">gilbertyeboah585@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">+233 24 872 7680</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">Ghana</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="space-y-3">
              <Link
                href="https://youtube.com/@yeboahgilbert3807?si=D8qcCXfA2d9DTbith"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-red-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube Channel</span>
              </Link>
              <Link
                href="https://www.instagram.com/gilbert.3687?igsh=MWF2cmEzb2g0d254ZQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </Link>
              <Link
                href="https://x.com/RealGilbert201"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span>@RealGilbert201</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Gilbert Yeboah. All rights reserved. | Inspiring Minds, Building Futures
          </p>
        </div>
      </div>
    </footer>
  )
}

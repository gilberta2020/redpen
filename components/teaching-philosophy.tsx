import { Heart, Lightbulb, Users, Target } from "lucide-react"

export default function TeachingPhilosophy() {
  const principles = [
    {
      icon: Heart,
      title: "Known to Unknown",
      description:
        "I believe in building on students' existing knowledge, using familiar concepts as stepping stones to new learning experiences.",
    },
    {
      icon: Lightbulb,
      title: "Student-Centered Learning",
      description:
        "Students are the sovereign stakeholders of the learning process. I create enabling environments where learners can think and contribute their valuable ideas.",
    },
    {
      icon: Users,
      title: "Interactive Engagement",
      description:
        "I facilitate learning through discussion, demonstration, and questioning, ensuring every student participates actively in the learning process.",
    },
    {
      icon: Target,
      title: "Practical Application",
      description:
        "Learning becomes meaningful when connected to real-life situations. I integrate practical examples to help students understand concepts better.",
    },
  ]

  return (
    <section id="philosophy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Teaching Philosophy</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My teaching philosophy is rooted in the belief that learning should progress from known to unknown, building
            bridges between familiar concepts and new knowledge.
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-gradient-to-r from-teal-50 to-orange-50 rounded-2xl p-8 md:p-12">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 text-center italic leading-relaxed">
              "Teaching and learning should be from Known to Unknown. Old knowledge serves as a hook on which the new
              one can be hung. As a teacher, I believe in creating learner-centered environments where students feel
              free to think, contribute, and grow."
            </blockquote>
            <div className="text-center mt-6">
              <cite className="text-teal-600 font-semibold">- Gilbert Yeboah</cite>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-teal-100 to-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <principle.icon className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{principle.title}</h3>
              <p className="text-gray-600 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Core Beliefs in Education</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-teal-600 mb-3">Learner-Centered Approach</h4>
              <p className="text-gray-700 mb-4">
                Students are individuals who possess valuable information but need guidance in comprehension and
                analysis. I create enabling learning environments where students can think freely and contribute their
                ideas.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-orange-500 mb-3">Building on Prior Knowledge</h4>
              <p className="text-gray-700 mb-4">
                I ensure that my Relevant Previous Knowledge always has a direct link with new topics, using familiar
                concepts that students can relate to and build upon.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-teal-600 mb-3">Real-Life Connections</h4>
              <p className="text-gray-700 mb-4">
                During lessons, I relate topics to real-life situations with practical examples, helping students
                understand concepts in meaningful contexts.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-orange-500 mb-3">Active Participation</h4>
              <p className="text-gray-700 mb-4">
                My teaching strategy involves every student through activities such as discussion, demonstration, and
                questioning, ensuring inclusive and engaging learning experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

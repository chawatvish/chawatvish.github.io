import React from 'react'

const PhilosophySection = () => {
  const philosophies = [
    {
      title: 'User-Centric Craftsmanship',
      description:
        "I believe that great code is invisible. Users shouldn't think about the technology; they should just feel the solution working seamlessly. Every line of code I write in Swift or Dart is aimed at delivering that frictionless experience.",
      icon: '✨'
    },
    {
      title: 'AI as a Multiplier',
      description:
        "Artificial Intelligence isn't just a buzzword—it's a tool to amplify human potential. I integrate AI not to replace human touch, but to remove the mundane, allowing users to focus on what they do best: being creative.",
      icon: '🚀'
    },
    {
      title: 'Continuous Evolution',
      description:
        "The tech landscape changes daily. My approach is built on a foundation of continuous learning and adaptation. Whether it's the latest iOS framework or a new LLM capability, I stay ahead to ensure my solutions are future-proof.",
      icon: '🌱'
    }
  ]

  return (
    <section className="section-container philosophy-section">
      <div className="card card-wide">
        <h2 className="section-title">My Philosophy</h2>
        <p className="section-text mb-12">
          Building software is more than just writing code. It's about
          understanding the human problem and crafting a digital solution that
          fits naturally into people's lives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {philosophies.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection

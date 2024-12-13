"use client"

import React, { useState, useEffect } from "react"

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, Tech Innovators",
    content: "Dr. Lal Tanwani's insights and guidance have been instrumental in shaping our company's vision and strategy. His vast knowledge and experience are truly inspiring.",
    bg: "bg-gradient-to-r from-primary/20 to-primary/30",
  },
  {
    name: "Jane Smith",
    position: "Founder, EdTech Solutions",
    content: "Working with Dr. Tanwani has been a transformative experience. His innovative approaches to education and entrepreneurship have revolutionized our product development process.",
    bg: "bg-gradient-to-r from-secondary/20 to-secondary/30",
  },
  {
    name: "Alex Johnson",
    position: "Dean, Global Business School",
    content: "Dr. Lal Tanwani is a visionary educator and a brilliant mind. His contributions to our institution have elevated our programs to new heights of excellence.",
    bg: "bg-gradient-to-r from-accent/20 to-accent/30",
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-display text-foreground">
          What People Say
        </h2>
        <div className="relative h-[300px] md:h-[250px] overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-500 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              } ${testimonial.bg} rounded-lg shadow-lg p-8`}
            >
              <p className="text-lg mb-4 text-foreground">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
                index === currentIndex ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials


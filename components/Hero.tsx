"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, GraduationCap, Users, Sparkles } from 'lucide-react'
import { TypeAnimation } from "react-type-animation"
import { useSpring, animated } from 'react-spring'
import laltanwani from '@/app/assets/images/laltanwani/dr-lal-tanwani.png'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef(null)

  const floatingAnimation = (y: number, delay: number) => useSpring({
    from: { transform: 'translateY(0px)' },
    to: [
      { transform: `translateY(${y}px)` },
      { transform: 'translateY(0px)' }
    ],
    config: {
      mass: 1,
      tension: 280,
      friction: 60
    },
    loop: true,
    delay: delay
  })

  const floatingProps1 = floatingAnimation(15, 0)
  const floatingProps2 = floatingAnimation(-12, 200)
  const floatingProps3 = floatingAnimation(18, 400)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#fff5f2] px-4 sm:px-6 lg:px-8 py-12 lg:py-0 flex items-center">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-cover opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div
            className="w-full lg:w-1/2 space-y-6 text-center lg:text-left mt-8 lg:mt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-display leading-tight space-y-2 sm:space-y-0" 
              variants={itemVariants}
              >
              <div>Transforming</div>
              <div>
                <span className="text-[#FF5722]">the future</span> of
              </div>
              <TypeAnimation
                sequence={["Excellence", 2000, "Innovation", 2000, "Leadership", 2000, "Education", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#FF5722]"
                />
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Dr. Lal Tanwani: Pioneering educator and visionary leader with 30 years of experience.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-[#FF5722] text-white hover:bg-[#FF5722]/90 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg"
              >
                Discover More
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn border-2 border-[#FF5722] text-[#FF5722] hover:bg-[#FF5722]/10 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg"
              >
                Watch Video
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 relative"
            variants={itemVariants}
          >
            <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none lg:h-[calc(100vh-6rem)]">
              <div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fff5f2]" 
                style={{ 
                  background: 'linear-gradient(to bottom, rgba(255, 245, 242, 0) 0%, rgba(255, 245, 242, 0) 70%, rgba(255, 245, 242, 1) 100%)',
                  zIndex: 10
                }}
              ></div>
              <Image
                src={laltanwani}
                alt="Dr. Lal Tanwani"
                fill
                className="object-contain object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                priority
                onLoad={() => setIsLoaded(true)}
              />

              {isLoaded && (
                <>
                  <animated.div 
  style={floatingProps1}
  className="absolute top-8 sm:top-16 lg:top-24 right-0 sm:-right-4 lg:right-0 bg-white p-3 sm:p-4 rounded-xl shadow-lg z-20 w-40 sm:w-48 lg:w-56 hidden sm:block"
>
  <div className="flex items-center gap-3">
    <div className="p-2 bg-[#FF5722]/10 rounded-lg flex-shrink-0">
      <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-[#FF5722]" />
    </div>
    <div className="min-w-0">
      <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 whitespace-nowrap">11 Degrees</p>
      <p className="text-xs sm:text-sm text-gray-600">Academic Achievement</p>
    </div>
  </div>
</animated.div>


                  <animated.div 
                    style={floatingProps2}
                    className="absolute top-1/2 right-0 sm:-right-4 lg:right-0 bg-white p-3 sm:p-4 rounded-xl shadow-lg z-20 w-40 sm:w-48 lg:w-56"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-[#FF5722]/10 rounded-lg">
                        <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-[#FF5722]" />
                      </div>
                      <div>
                        <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">30+ Years</p>
                        <p className="text-xs sm:text-sm text-gray-600">of Excellence</p>
                      </div>
                    </div>
                  </animated.div>

                  <animated.div 
                    style={floatingProps3}
                    className="absolute bottom-16 sm:bottom-32 lg:bottom-24 left-0 sm:-left-4 lg:left-0 bg-white p-3 sm:p-4 rounded-xl shadow-lg z-20 w-40 sm:w-48 lg:w-56"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-[#FF5722]/10 rounded-lg">
                        <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[#FF5722]" />
                      </div>
                      <div>
                        <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">10,000+</p>
                        <p className="text-xs sm:text-sm text-gray-600">Students Mentored</p>
                      </div>
                    </div>
                  </animated.div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero


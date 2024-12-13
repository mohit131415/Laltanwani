"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { DEGREE_IMAGES } from "@/components/constant/constant";

const degrees = [
  {
    title: "Bachelor of Commerce",
    year: "1991",
    institution: "University of Mumbai",
    image: DEGREE_IMAGES.BachelorofCommerce
  },
  {
    title: "Master of Commerce",
    year: "1994",
    institution: "University of Mumbai",
    image: DEGREE_IMAGES.MastersofCommerce
  },
  {
    title: "Bachelor of Education",
    year: "1996",
    institution: "University of Mumbai",
    image: DEGREE_IMAGES.BachelorofEducaation
  },
  {
    title: "Master of Commerce (Cost & Works Accounting)",
    year: "1997",
    institution: "University of Pune",
    image: DEGREE_IMAGES.MastersofCommercecostandwork
  },
  {
    title: "Master of Arts (Economics)",
    year: "2002",
    institution: "Madurai Kamaraj University",
    image: DEGREE_IMAGES.MasterofArts
  },
  {
    title: "Master of Philosophy",
    year: "2009",
    institution: "The Global Open University",
    image: DEGREE_IMAGES.MasterofPhilosophy
  },
  {
    title: "Diploma in Value & Spiritual Education",
    year: "2016",
    institution: "Yashwantrao Chavan Maharashtra Open University",
    image: DEGREE_IMAGES.DiplomainValueSpiritualEducation
  },
  {
    title: "Master of Business Administration (Finance)",
    year: "2017",
    institution: "Vinayaka Missions Sikkim University",
    image: DEGREE_IMAGES.MasterofBusinessAdministration
  },
  {
    title: "Doctor of Philosophy (Commerce)",
    year: "2017",
    institution: "Dravidian University",
    image: DEGREE_IMAGES.DoctorofPhilosophy
  },
  {
    title: "Advanced Diploma in Value & Spiritual Education",
    year: "2018",
    institution: "Yashwantrao Chavan Maharashtra Open University",
    image: DEGREE_IMAGES.AdvancedDiplomainValue
  },
  {
    title: "Doctor of Literature",
    year: "2018",
    institution: "Ballsbridge University",
    image: DEGREE_IMAGES.DoctorofLiterature
  },
  {
    title: "Doctor of Philosophy (Business Policy & Administration)",
    year: "2019",
    institution: "University of Mumbai",
    image: DEGREE_IMAGES.DoctorofPhilosophyBusiness
  },
  {
    title: "Doctor of Philosophy",
    year: "2021",
    institution: "The American University",
    image: DEGREE_IMAGES.DoctorofPhilosophyAmerican
  },
  {
    title: "Legum Baccalaureus (L. L. B.)",
    year: "2022",
    institution: "University of Mumbai",
    image: DEGREE_IMAGES.LegumBaccalaureus
  }
]

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [showAll, setShowAll] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    setIsLargeScreen(window.innerWidth >= 1024)
    
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Show 8 cards on large screens (or all if showAll is true), but only 4 on smaller screens unless expanded
  const visibleDegrees = isLargeScreen 
    ? (showAll ? degrees : degrees.slice(0, 8))
    : (showAll ? degrees : degrees.slice(0, 4))

  return (
    <section ref={ref} className="py-20 bg-[#fff5f2]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-[#FF5722]">
            Academic Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey of continuous learning and academic achievements spanning multiple disciplines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleDegrees.map((degree, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ backgroundColor: 'white' }}
            >
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                  src={degree.image}
                  alt={degree.title}
                  fill
                  className="object-contain p-2"
                />
                <div className="absolute top-4 right-4 bg-[#FF5722] rounded-full p-2">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{degree.title}</h3>
                  <span className="text-sm font-medium text-[#FF5722]">{degree.year}</span>
                </div>
                <p className="text-sm text-gray-900 mb-1">{degree.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.8 }}
  className="text-center mt-12 flex flex-row items-center gap-4 lg:gap-6 justify-center"
>
  {degrees.length > 4 && !isLargeScreen && (
    <motion.button
      onClick={() => setShowAll(!showAll)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="btn bg-[#FF5722] text-white hover:bg-[#FF5722]/90 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg"
    >
      {showAll ? 'Show Less' : 'View More'}
    </motion.button>
  )}
  {isLargeScreen && degrees.length > 8 && (
    <motion.button
      onClick={() => setShowAll(!showAll)}
      className="btn bg-[#FF5722] text-white hover:bg-[#FF5722]/90 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg"
    >
      {showAll ? 'Show Less' : 'View More'}
    </motion.button>
  )}
  <Link
    href="/accomplishments"
  >
    <motion.button
     whileHover={{ scale: 1.05 }}
     whileTap={{ scale: 0.95 }}
     className="btn border-2 border-[#FF5722] text-[#FF5722] hover:bg-[#FF5722]/10 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg"
    >
      View All Accomplishments
    </motion.button>
    </Link>
    </motion.div>
      </div>
    </section>
  )
}

export default Experience

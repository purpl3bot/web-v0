'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'

const images = [
  { src: '/image1.jpg', width: 800, height: 600 },
  { src: '/image2.jpeg', width: 700, height: 900 },
  { src: '/image3.jpg', width: 900, height: 700 },
  { src: '/image4.jpeg', width: 900, height: 700 },
  // Add more images with their respective dimensions
]

const TRANSITION_DELAY = 10000 // 10 seconds

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length)
        setIsTransitioning(false)
      }, 100) // 1 second for fade out/in effect
    }, TRANSITION_DELAY)

    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
      setIsTransitioning(false)
    }, 1000)
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen -mt-16 lg:mt-0">
        <div className="relative w-full max-w-4xl aspect-[4/3] mb-8">
          {images.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={`Artwork ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              style={{
                objectFit: 'contain',
              }}
              className={`transition-opacity duration-100 cursor-pointer ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              } ${isTransitioning ? 'opacity-10' : ''}`}
              onClick={nextImage}
            />
          ))}
        </div>
        <p className="mb-4 selection:bg-lime-100 selection:text-black">
              there was a small seed in the
garden. a shadow on its surface
that i could barely see made me
suspect that something was
hiding in the total darkness
within. with the shiny edge of a
scalpel, i pierced it, letting the
light in. with the microscope i
slowly focused on the blurred
spot: at the bottom of the seed,
there was an eye. an eye very
similar to mine.
        </p>
      </div>
    </Layout>
  )
}

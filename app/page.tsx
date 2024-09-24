'use client'

import { useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'

const images = [
  { src: '/image1.jpg', width: 800, height: 600 },
  { src: '/image2.jpeg', width: 700, height: 900 },
  { src: '/image3.jpg', width: 900, height: 700 },
  { src: '/image4.jpeg', width: 900, height: 700 },
  // Add more images with their respective dimensions
]

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="relative w-full max-w-3xl aspect-[4/3] mb-8">
          <Image
            src={images[currentImage].src}
            alt={`Artwork ${currentImage + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            style={{
              objectFit: 'contain',
            }}
            onClick={nextImage}
            className="transition-opacity duration-200 cursor-pointer"
          />
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

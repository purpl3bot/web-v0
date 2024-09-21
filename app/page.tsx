'use client'

import { useState } from 'react'
import Image from 'next/image'
import Layout from '../components/Layout'

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
  // Add more image paths as needed
]

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  return (
    <Layout>
      <div>
        <div className="relative w-[70vh] h-full overflow-hidden">
          <Image
            src={images[currentImage]}
            alt="Artwork"
            layout="fill"
            objectFit="cover"
            onClick={nextImage}
            className="transition-opacity duration-500 cursor-pointer"
          />
        </div>
        <p className="mb-4">
              Your artist statement goes here. This is a placeholder text. Replace it with your actual statement
              about your art, your inspirations, and your creative process.
        </p>
      </div>
    </Layout>
  )
}

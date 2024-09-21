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
        <div className="relative h-full h-[70vh] overflow-hidden">
          <Image
            src={images[currentImage]}
            alt="Artwork"
            layout="fill"
            objectFit="cover"
            onClick={nextImage}
            className="transition-opacity duration-500 cursor-pointer"
          />
        </div>
        <div className="mt-8">
          <textarea
            className="w-full h-32 p-2 border border-gray-300 rounded"
            placeholder="Enter your text here..."
          ></textarea>
        </div>
      </div>
    </Layout>
  )
}

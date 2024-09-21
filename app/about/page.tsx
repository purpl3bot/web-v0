'use client'

import Image from 'next/image'
import Layout from '../../components/Layout'

export default function About() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl mb-6 font-astloch">About Mercedes Farias</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl mb-4">Artist Statement</h3>
            <p className="mb-4">
              Your artist statement goes here. This is a placeholder text. Replace it with your actual statement
              about your art, your inspirations, and your creative process.
            </p>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Artwork example"
              width={600}
              height={400}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-xl mb-4">Exhibitions</h3>
            <ul className="list-disc list-inside mb-4">
              <li>2023 - Solo Exhibition, Gallery Name, City, Country</li>
              <li>2022 - Group Show "Art in the Dark", Another Gallery, Another City</li>
              <li>2021 - Biennale of Contemporary Art, Big Museum, Capital City</li>
            </ul>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Exhibition photo"
              width={600}
              height={400}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-xl mb-4">Artist Bio</h3>
            <p className="mb-4">
              Your biography goes here. This is a placeholder text. Replace it with your actual biography,
              including your background, education, and significant milestones in your artistic career.
            </p>
            <Image

import Image from 'next/image'
import Layout from '@/components/Layout'

export default function About() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl mb-6 font-astloch">About Mercedes Farias</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl mb-4">Artist Statement</h3>
            <p className="mb-4">
            </p>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Artwork example"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-xl mb-4">Solo Shows</h3>
            <ul className="list-disc list-inside mb-4">
              <li>2024 - Clavicles & Twigs, Graw Böckler Garage, Berlin</li>
              <li>2024 - Oficina de disección, 101Montón, Buenos Aires</li>
            </ul>
            <h3 className="text-xl mb-4">Group Shows</h3>
            <ul className="list-disc list-inside mb-4">
              <li>2024 - Balancing the Scales, 2Chairs, Berlin</li>
              <li>2024 - Plus one, West Germany, Berlin</li>
              <li>2024 - Solaria, Puticlú, Buenos Aires</li>
              <li>2022 - Garagen Festival, Graw Böckler Garage, Berlin</li>
              <li>2022 - Zeitraum für Zweifel, Top e.v., Berlin</li>
              <li>2022 - Paula Bakun & Mercedes Farias en las ruinas de Ciudad Universitaria, OhNo Gallery, Tucumán, Argentina</li>
              <li>2021 - Krit-Kölln Beilage, Lebensmittel Projekt, Berlin</li>
              <li>2020 - Further down the drain, OhNo Gallery, London, Buenos Aires</li>
              <li>2018 - Chin Chin, Galería Amistad, Bueno Aires</li>
            </ul>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Exhibition photo"
              width={600}
              height={400}
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
              src="/placeholder.svg?height=400&width=600"
              alt="Artist portrait"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

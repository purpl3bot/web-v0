import Layout from '../../components/Layout'

export default function About() {
  return (
    <Layout>
      <div>
        <h2 className="text-2xl mb-4">About</h2>
        <div className="space-y-4">
          <textarea
            className="w-full h-32 p-2 border border-gray-300 rounded"
            placeholder="Enter your bio here..."
          ></textarea>
          <textarea
            className="w-full h-32 p-2 border border-gray-300 rounded"
            placeholder="Enter your past exhibitions here..."
          ></textarea>
        </div>
      </div>
    </Layout>
  )
}

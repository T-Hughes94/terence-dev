import Layout from './components/Layout'

export default function Home() {
  return (
    <Layout>
      <section className="min-h-screen p-6">
        <h1 className="text-4xl font-bold">Welcome to my portfolio 👋</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Let's build something awesome.
        </p>
      </section>
    </Layout>
  )
}


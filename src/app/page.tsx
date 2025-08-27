export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <main className="min-h-screen bg-gradient-to-br from-red-600 via-black to-gray-900 text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-bold mb-6">🚀 AI Brand Redesign</h1>
        <p className="text-lg text-gray-300 max-w-xl text-center">
          A modern, AI-powered redesign of my favorite brand’s website — built with Next.js & Tailwind CSS.
        </p>

        <div className="mt-10 flex gap-6">
          <a
            href="#features"
            className="px-6 py-3 bg-red-500 hover:bg-red-700 rounded-xl font-semibold shadow-lg"
          >
            View Features
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl font-semibold shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="mt-20 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">✨ Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">AI Branding</h3>
            <p className="text-gray-300 text-sm">
              Logos, colors, and typography generated with AI tools like Adobe Firefly & Durable.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Modern Frontend</h3>
            <p className="text-gray-300 text-sm">
              Built with Next.js + Tailwind CSS for speed, responsiveness, and scalability.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Dynamic Backend</h3>
            <p className="text-gray-300 text-sm">
              Strapi / Firebase integration for easy content management and real-time updates.
            </p>
          </div>
        </div>
      </section>
            {/* Contact Section */}
      <section
        id="contact"
        className="mt-20 max-w-3xl mx-auto text-center p-8 bg-gray-800 rounded-xl shadow-lg"
      >
        <h2 className="text-4xl font-bold mb-6">📩 Contact Me</h2>
        <p className="text-gray-300 mb-6">
          Have an idea or want to collaborate? Send me a message!
        </p>

        <form
          action="https://formspree.io/f/mzzbkzlb" 
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-red-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-red-500"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-red-500"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-red-500 hover:bg-red-700 rounded-xl font-semibold shadow-lg w-full"
          >
            Send Message
          </button>
        </form>
      </section>
        <section className="w-full py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ✨ Why Choose AI Branding?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-red-600 via-black to-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-3">🤖 AI Branding</h3>
              <p className="text-gray-300">
                Modern AI-driven design principles that give your brand a futuristic and professional look.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-red-600 via-black to-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-3">📱 Responsive Design</h3>
              <p className="text-gray-300">
                Optimized layouts that look stunning across all devices — from mobile screens to desktops.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-red-600 via-black to-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-3">🚀 SEO Ready</h3>
              <p className="text-gray-300">
                Built with performance and search engine optimization in mind to boost your brand visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

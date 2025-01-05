// app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-900">
        <h1 className="text-5xl font-extrabold text-blue-400 mb-6">
          Welcome to Neueva
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          Discover the best apps and games, curated for your needs.
        </p>
        <div className="flex justify-center space-x-6">
          <Link
            href="/browse"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            Explore Now
          </Link>
          <Link
            href="/about"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto px-6 py-16">
        {/* Featured App */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Featured App</h2>
          <p className="text-gray-400 mb-6">
            Boost your productivity with our top-rated app.
          </p>
          <Link
            href="/browse?category=App"
            className="text-blue-400 hover:text-blue-500 font-medium mt-auto"
          >
            Browse Apps →
          </Link>
        </div>

        {/* Featured Game */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Featured Game</h2>
          <p className="text-gray-400 mb-6">
            Immerse yourself in an epic gaming adventure.
          </p>
          <Link
            href="/browse?category=Game"
            className="text-blue-400 hover:text-blue-500 font-medium mt-auto"
          >
            Browse Games →
          </Link>
        </div>

        {/* Advanced Filters */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Advanced Filters</h2>
          <p className="text-gray-400 mb-6">
            Refine your search with powerful filtering tools.
          </p>
          <Link
            href=""
            disabled
            className="text-blue-400 hover:text-blue-500 font-medium mt-auto"
          >
            Use Filters →
          </Link>
        </div>

        {/* Top-Rated Picks */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Top-Rated Picks</h2>
          <p className="text-gray-400 mb-6">
            Explore the highest-rated apps and games.
          </p>
          <Link
            href=""
            disabled
            className="text-blue-400 hover:text-blue-500 font-medium mt-auto"
          >
            View Top Picks →
          </Link>
        </div>

        {/* New Releases */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">New Releases</h2>
          <p className="text-gray-400 mb-6">
            Stay updated with the latest releases.
          </p>
          <Link
            href="/browse?sort=date"
            className="text-blue-400 hover:text-blue-500 font-medium mt-auto"
          >
            See New Releases →
          </Link>
        </div>

        {/* Community Favorites */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Community Favorites</h2>
          <p className="text-gray-400 mb-6">
            Check out what's trending among users.
          </p>
          <Link
            href=""
            disabled
            className="text-blue-400 hover:text-blue-500 font-medium mt-auto"
          >
            Browse Favorites →
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gray-900">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">
          Ready to Dive In?
        </h2>
        <p className="text-gray-300 mb-8">
          Explore an endless world of apps and games tailored just for you.
        </p>
        <Link
          href="/browse"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg"
        >
          Start Browsing
        </Link>
      </section>
    </div>
  );
}

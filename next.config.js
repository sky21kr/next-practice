/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/home',
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}`,
      },
    ]
  }
}

module.exports = nextConfig

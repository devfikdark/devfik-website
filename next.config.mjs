/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/our-work", destination: "/our-work.html" },
      { source: "/our-story", destination: "/our-story.html" },
    ];
  },
  images: {
    domains: ["dtj79c1o8b5yh.cloudfront.net"],
  },
};

export default nextConfig;

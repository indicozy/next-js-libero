module.exports = {
  images: {
    domains: ["wp.liberoproject.kz", "liberoproject.kz", "secure.gravatar.com"],
  },
  async redirects() {
    return [
      {
        source: '/feed',
        destination: 'https://wp.liberoproject.kz/feed',
        permanent: false,
      },
    ]
  },
};

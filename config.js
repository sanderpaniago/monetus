module.exports = {
  lighthouse: {
    server:
      process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
        ? 'https://monetus.sanderpaniago.dev'
        : process.env.NEXT_PUBLIC_VERCEL_ENV
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
        : 'http://localhost:3000',
    pages: {
      home: '/'
    }
  },

  baseUrl:
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
      ? 'https://monetus.sanderpaniago.dev'
      : process.env.NEXT_PUBLIC_VERCEL_ENV
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'http://localhost:3000'
}

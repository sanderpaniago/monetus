module.exports = {
  lighthouse: {
    server: process.env.VERCEL_URL || 'http://localhost:3000',
    pages: {
      home: '/'
    }
  },

  baseUrl: process.env.VERCEL_URL || 'http://localhost:3000'
}

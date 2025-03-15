module.exports = {
  server: {
    port: process.env.MCP_PORT || 3001,
    host: process.env.MCP_HOST || 'localhost'
  },
  puppeteer: {
    headless: process.env.NODE_ENV === 'production',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  },
  logging: {
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug'
  }
}
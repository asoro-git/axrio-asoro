const axios = require('axios');
const cheerio = require('cheerio');

async function getPage(url, timeout=10000) {
  const response = await axios.get(url, { timeout, // Request timeout in milliseconds
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36', // Set user-agent to mimic a browser
      'Accept-Language': 'en-US,en;q=0.9'
    }});
  return cheerio.load(response.data);
}

module.exports = {
  getPage,
};

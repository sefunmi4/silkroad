const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Basic route demonstrating fetching NFTs from OpenSea
app.get('/nfts', async (req, res) => {
  try {
    const { data } = await axios.get('https://api.opensea.io/api/v1/assets', {
      params: { order_direction: 'desc', limit: 10 }
    });
    res.json(data.assets);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch NFTs', details: err.message });
  }
});

app.listen(port, () => {
  console.log(`NFT server listening on port ${port}`);
});

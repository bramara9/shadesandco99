const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Classic Aviators', price: 79.99, category: 'aviator' },
    { id: 2, name: 'Retro Round', price: 59.99, category: 'round' },
    { id: 3, name: 'Sport Wrap', price: 89.99, category: 'sport' },
    { id: 4, name: 'Cat Eye Elegance', price: 69.99, category: 'cat-eye' },
  ]);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Shades & Co server running at http://localhost:${PORT}`);
  });
}

module.exports = app;

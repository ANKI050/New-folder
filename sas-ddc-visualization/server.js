// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (HTML, JS, CSS)
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`DDC server running at: http://localhost:${PORT}`);
});

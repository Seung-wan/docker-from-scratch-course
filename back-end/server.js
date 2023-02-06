const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors())

app.get('/status', (req, res) => {
  res.json({ status: 'online'});
});

app.listen(3080, () => {
  console.log('Server running on http://localhost:3080')
});

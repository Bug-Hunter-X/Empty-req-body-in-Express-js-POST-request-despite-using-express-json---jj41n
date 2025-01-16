const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  if (!req.is('application/json')) {
    return res.status(400).json({ error: 'Invalid content type' });
  }
  console.log(req.body); 
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));
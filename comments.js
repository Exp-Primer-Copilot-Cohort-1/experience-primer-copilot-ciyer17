// Create web server
// 1. Load express
const express = require('express');
// 2. Create express server
const app = express();
// 3. Load comments
const comments = require('./comments.json');
// 4. Create route
app.get('/', (req, res) => {
  res.json(comments);
});
// 5. Start server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
// 6. Test in browser
// http://localhost:3000/
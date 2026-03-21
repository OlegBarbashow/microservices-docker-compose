const express = require("express");
const app = express();

app.get('/test', (req, res) => {
  res.send('Api: You are going to /test');
});

app.listen(3000, () => {
  console.log('Api server is online');
});

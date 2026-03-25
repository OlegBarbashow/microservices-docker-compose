const express = require("express");
const app = express();

const port = process.env.PORT
const host = process.env.HOST

app.get('/test', (req, res) => {
  res.send('Api: You are going to /test');
});

app.listen(port, () => {
  console.log(`Api server is online on port ${port} and host ${host}`);
});

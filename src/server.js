const express = require('express');
const testData = require('./api/testData.json');

const app = express();
const port = 5000;

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};

app.use(allowCrossDomain);

app.get('/testData', (req, res, next) => {
  res.send(testData);
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

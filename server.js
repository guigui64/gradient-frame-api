const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const image = require('./controllers/image');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.post('/imageurl', (req, res) => image.handleImageUrl(req, res));

app.listen(3000, () => {
  console.log('app is running on port 3000');
})
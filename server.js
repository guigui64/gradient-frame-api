const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const image = require('./controllers/image');

const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json());

app.post('/imageurl', (req, res) => image.handleImageUrl(req, res));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
})
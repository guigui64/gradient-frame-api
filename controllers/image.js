const dotenv = require('dotenv');
const Clarifai = require('clarifai');

dotenv.config();
const clarifaiApp = new Clarifai.App({
  apiKey: process.env.CLARIFAI_API_KEY
});

const handleImageUrl = (req, res) => {
  const {
    url
  } = req.body;
  clarifaiApp.models.predict(Clarifai.COLOR_MODEL, url)
    .then(response => {
      if (response.outputs && response.outputs[0].data &&
        response.outputs[0].data.colors) {
        const colors = response.outputs[0].data.colors;
        const mainColors = [colors[0].raw_hex, colors[1].raw_hex];
        console.log('url ' + url + ' returns ' + mainColors);
        res.json(mainColors);
      }
      res.status(400).json('unable to get the colors from the Clarifai API response');
    })
    .catch(err => res.status(400).json('unable to work with Clarifai API'));
};

module.exports = {
  handleImageUrl
};
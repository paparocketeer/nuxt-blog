const express = require("express");
const body_parser = require("body-parser");
const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose');


const app = express();
app.use(body_parser.json());
app.use(express.json()); // Make sure it comes back as json


mongoose.connect('mongodb+srv://mironez:KncjtY81fHenQFMH@cluster0.ezbft.gcp.mongodb.net/nuxt-blog', {
  useNewUrlParser: true
});

const wikiRouter = require('./routes/wikiRoutes.js');

app.use('/api/wiki', wikiRouter);

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
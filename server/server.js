if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require('express');
const cors = require('cors');
const connectToMongo = require('./config/connectToMongo');
const contactController = require('./routes/contactController');
const newsletterController = require('./routes/newsletterController');

const app = express();

app.use(express.json({ limit: '500mb' }));

app.use(cors({
  origin: true,
  credentials: true
}));

connectToMongo();

app.post("/api/contact", contactController.createContact);

app.post("/api/newsletter", newsletterController.createNewsletter);

app.listen(process.env.PORT);

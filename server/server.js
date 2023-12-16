if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require('express');
const cors = require('cors');
const requireAuth = require('./middleware/requireAuth');
const cookieParser = require('cookie-parser');

const connectToMongo = require('./config/connectToMongo');
const contactController = require('./routes/contactController');
const disputeController = require('./routes/disputeController');
const sponsorshipContoller = require('./routes/sponsorshipContoller');
const registrationController = require('./routes/registrationController');
const newsletterController = require('./routes/newsletterController');
const adminController = require('./routes/adminController');

const app = express();

app.use(express.json({ limit: '500mb' }));
app.use(cookieParser());

app.use(cors({
  origin: true,
  credentials: true
}));

connectToMongo();

app.post("/api/contact", contactController.createContact);
app.post("/api/raise-a-dispute", disputeController.createDispute);
app.post("/api/sponsorship", sponsorshipContoller.createSponsorship);
app.post("/api/registration", registrationController.createRegistration);
app.get("/api/show-registrations", registrationController.fetchRegistration);
app.post("/api/newsletter", newsletterController.createNewsletter);
app.post("/api/sign-up", adminController.signup);
app.post("/api/login", adminController.login);
app.get("/api/logout", adminController.logout);

app.listen(process.env.PORT);

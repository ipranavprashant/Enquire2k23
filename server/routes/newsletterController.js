const Newsletter = require("../models/NewsletterSchema");

const createNewsletter = async (req, res) => {
  try {
    const email = req.body.email;

    const createdNewsletter = await Newsletter.create({
      email: email,
    });

    res.json({ createdNewsletter: createdNewsletter });
  } catch (error) {
    console.error("Error during createNewsletter:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createNewsletter: createNewsletter,
};

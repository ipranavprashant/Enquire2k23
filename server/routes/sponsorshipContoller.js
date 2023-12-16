const Sponsorship = require("../models/SponsorshipSchema");

const createSponsorship = async (req, res) => {
  try {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const mobilenumber = req.body.mobilenumber;
    const message = req.body.message;

    const createdSponsorship = await Sponsorship.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      mobilenumber: mobilenumber,
      message: message,
    });

    res.json({ createdSponsorship: createdSponsorship });
  } catch (error) {
    console.error("Error during createSponsorship:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createSponsorship: createSponsorship,
};

const Dispute = require("../models/DisputeSchema");

const createDispute = async (req, res) => {
  try {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const mobilenumber = req.body.mobilenumber;
    const message = req.body.message;

    const createdDispute = await Dispute.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      mobilenumber: mobilenumber,
      message: message,
    });

    res.json({ createdDispute: createdDispute });
  } catch (error) {
    console.error("Error during createDispute:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createDispute: createDispute,
};

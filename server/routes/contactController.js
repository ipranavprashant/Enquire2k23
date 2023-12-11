const Contact = require("../models/ContactSchema");

const createContact = async (req, res) => {
    try {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const mobilenumber = req.body.mobilenumber;
        const message = req.body.message;

        const createdContact = await Contact.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            mobilenumber: mobilenumber,
            message: message
        });

        res.json({ createdContact: createdContact });
    } catch (error) {
        console.error("Error during createContact:", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    createContact: createContact
}

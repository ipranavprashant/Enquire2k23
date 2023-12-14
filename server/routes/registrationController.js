const Registration = require("../models/RegistrationSchema");

const createRegistration = async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const college = req.body.college;
        const phoneCode = req.body.phoneCode;
        const mobilenumber = req.body.mobilenumber;
        const eventname = req.body.eventname;

        const createRegistration = await Registration.create({
            name: name,
            email: email,
            college: college,
            phoneCode: phoneCode,
            mobilenumber: mobilenumber,
            eventname: eventname
        });

        res.json({ createRegistration: createRegistration });
    } catch (error) {
        console.error("Error during createRegistration:", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    createRegistration: createRegistration
}

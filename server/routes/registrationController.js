const Registration = require("../models/RegistrationSchema");

const createRegistration = async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const college = req.body.college;
        const phoneCode = req.body.phoneCode;
        const mobilenumber = req.body.mobilenumber;
        const eventname = req.body.eventname;

        const existingRegistration = await Registration.findOne({ email });

        if (existingRegistration) {
            return res.status(409).json({ error: "Duplicate email. This email is already registered." });
        }

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


const fetchRegistration = async (req, res) => {
    try {
        const registration = await Registration.find();
        res.json({ gotRegistration: registration });
    } catch (error) {
        console.error("Error during fetchItems:", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    createRegistration: createRegistration,
    fetchRegistration: fetchRegistration
}

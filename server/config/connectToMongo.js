const mongoose = require("mongoose");
const mongoURI = process.env.mongoURI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
    });
    console.log(`Server is running on port ${process.env.PORT}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;

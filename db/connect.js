const mongoose = require("mongoose");
process.env.MONGO_USERNAME;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error("error is", error);
  }
};

module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async (DB_URL) => {
  try {
    await mongoose.connect(DB_URL);

    console.log("Connected");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;

const mongoose = require("mongoose");

const myDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("MongoDB is connected");
    
  } catch (error) {
    console.error("DB is not connected ", error);

    process.exit();
  }
};
module.exports = myDB;

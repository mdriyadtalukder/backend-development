const mongoose = require("mongoose");

const myDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://mdriyadtalukder69_db_user:mdriyadtalukder69_db_user01@cluster0.zgoff8w.mongodb.net/");
    console.log("MongoDB is connected");
    
  } catch (error) {
    console.error("DB is not connected ", error);

    process.exit();
  }
};
module.exports = myDB;

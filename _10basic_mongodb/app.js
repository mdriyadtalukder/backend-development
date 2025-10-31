const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://mdriyadtalukder69_db_user:mdriyadtalukder69_db_user01@cluster0.zgoff8w.mongodb.net/"
  )
  .then(() => console.log("database connected"))
  .catch((e) => console.log(e));

//create schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createAt: { type: Date, default: Date.now },
});

//create model
const User = mongoose.model("User", userSchema); //User is collection name

async function runQueryExample() {
  try {
    //add user
    // const newUser = await User.create({
    //   name: "Md Delete Talukder",
    //   email: "delete@gmail.com",
    //   age: 108,
    //   isActive: false,
    //   tags: ["developer"],
    // });
    // const newUser = new User({
    //   name: "Md Raj Talukder",
    //   email: "raj@gmail.com",
    //   age: 24,
    //   isActive: true,
    //   tags: ["developer", "designer","engineer"],
    // });
    // await newUser.save();
    // console.log(newUser);

    //get all user
    // const allUsers = await User.find({});
    // console.log(allUsers);

    //get specific users
    // const Users = await User.find({ isActive: false }); //getting those user whose isActive is false
    // console.log(Users);

    //get one user like if Md john Talukder is many user's name then 1st one will get..
    // const singleUser = await User.findOne({ name: "Md john Talukder" }); //getting those user whose isActive is false
    // console.log(singleUser);

    //get  user by id
    // const allUsers = await User.findById(newUser._id);
    // console.log(allUsers);

    // //get  users with just mentioned field
    // const allUsers = await User.find().select("name email -_id"); //dont want _id ..that is why wrote (-) minus _id..just want name and email field
    // console.log(allUsers);

    //get  limited user like pagination
    // const allUsers = await User.find().limit(4).skip(2); //1st 2 ta skip kore theb 3rd theke total 4 ta dibe..
    // console.log(allUsers);

    //get  users by specific's a order
    // const allUsers = await User.find().sort({ age: -1 }); // 1 means accending order.. -1 means decending order
    // console.log(allUsers);

    //get number of users of specific field
    // const allUsers = await User.find().countDocuments({isActive:true }); // isActive:false er koita user ase ta dibe
    // console.log(allUsers);

    //delete user by id
    // const allUsers = await User.findByIdAndDelete(newUser._id); // isActive:false er koita user ase ta dibe
    // console.log(allUsers);

    //update user by id
    const allUsers = await User.findByIdAndUpdate(
      "6904b4d6bd4882a3e72426e2",
      {
        $set: { age: 21, email: "zara22@gmail.com" },
        $push: { tags: "doctor" },
      },
      { new: true }
    ); // isActive:false er koita user ase ta dibe
    console.log(allUsers);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
}
runQueryExample();

const User = require("../model/user");

//register user

const register = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

//login user
const login = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something is wrong!",
    });
  }
};

module.exports={register,login};
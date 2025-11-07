const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register user

const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User is already exist",
      });
    }

    //hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role: role || "user",
    });
    if (newUser) {
      res.status(201).json({
        success: true,
        message: "New user is created!",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Unable to register!",
      });
    }
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
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist!",
      });
    }
    const isPass = await bcrypt.compare(password, user?.password);
    if (!isPass) {
      return res.status(400).json({
        success: false,
        message: "Invalid credential",
      });
    }

    //jwt--it will encrypt data (role,id,username) into json web token then give us info by decrypting

    const accessToken = jwt.sign(
      {
        userId: user?._id,
        username: user?.username,
        role: user?.role,
      },
      "JWT_SECRET_KEY",
      { expiresIn: "30m" }
    );

    res.status(200).json({
      success: true,
      message: "Logged in successfully!",
      accessToken,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something is wrong!",
    });
  }
};

module.exports = { register, login };

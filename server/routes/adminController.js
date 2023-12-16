const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/AdminSchema");

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 8);

    const user = await Admin.create({
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({ user });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send("Internal Server Error");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Admin.findOne({ email: email });

    if (!user) {
      return res.sendStatus(401);
    }
    const passwordMatch = bcrypt.compareSync(password, user.password);

    if (!passwordMatch) {
      return res.sendStatus(401);
    }
    const expirationTime = Date.now() + 1000 * 60 * 60 * 24 * 30;
    const token = jwt.sign(
      { sub: user._id, expirationTime: expirationTime },
      process.env.SECRETKEY
    );
    res.cookie("Authorization", token, {
      expires: new Date(expirationTime),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    res.json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal Server Error");
  }
};

const logout = (req, res) => {
  try {
    res.clearCookie("Authorization");
    res.sendStatus(200);
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).send("Internal Server Error");
  }
};

const checkAuth = (req, res) => {
  try {
    console.log(req.user);
    res.sendStatus(200);
  } catch (error) {
    console.error("Error during checkAuth:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  signup: signup,
  login: login,
  logout: logout,
  checkAuth: checkAuth,
};

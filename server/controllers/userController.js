import { comparePassword, hashedPassword } from "../helpers/authHelper.js";
import { UserDetails } from "../models/userDetails.js";
import { createJwtToken } from "../utils/createJwtToken.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.send({
      error: "Please provide all required fields.",
      missingFields: {
        name: !name,
        email: !email,
        password: !password,
      },
    });
  }

  try {
    const userExistOrNot = await UserDetails.findOne({ email: email });
    if (userExistOrNot)
      return res.status(403).send({
        success: false,
        message: "User account already exist",
      });

    const securedPass = await hashedPassword(password);
    const newUser = new UserDetails({ name, email, password: securedPass });

    // console.log(userWithToken)

    await newUser.save();

    const userToken = await createJwtToken(newUser);
    const userWithToken = { ...newUser, token: userToken };

    // console.log(userToken);

    // const userDetail = { ...newUser, token: userToken };

    const { name: userName, email: userEmail } = userWithToken._doc;
    // const { token } = userWithToken;

    const sharedUserDetails = { userName, userEmail };

    res.status(200).send({
      success: true,
      user: sharedUserDetails,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while registering the user",
      error: error,
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send({
      error: "Please provide all required fields.",
      missingFields: {
        email: !email,
        password: !password,
      },
    });
  }

  try {
    const userExistOrNot = await UserDetails.findOne({ email: email });
    if (!userExistOrNot)
      return res.status(403).send({
        success: false,
        message: "User noty exist",
      });

    const passworkCheck = await comparePassword(
      password,
      userExistOrNot.password
    );
    if (!passworkCheck) {
      return res.status(500).send({
        success: false,
        message: "Wrong Credentials",
      });
    }

    const userToken = await createJwtToken(userExistOrNot);
    const userWithToken = { ...userExistOrNot, token: userToken };

    const { name: userName, email: userEmail } = userWithToken._doc;
    const { token } = userWithToken;

    const sharedUserDetails = { userName, userEmail, token };

    res.status(200).send({
      success: true,
      message:"Logged in successfully",
      user: sharedUserDetails,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while registering the user",
      error: error,
    });
  }
};

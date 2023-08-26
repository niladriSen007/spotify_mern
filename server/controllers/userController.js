import { hashedPassword } from "../helpers/authHelper.js";
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
    const userExistOrNot = await UserDetails.findOne({ email:email });
    if (userExistOrNot)
      return res.status(403).send({
        success: false,
        message: "User account already exist",
      });

    const securedPass = await hashedPassword(password);
    const newUser = new UserDetails({ name, email, password: securedPass });

    await newUser.save();


    const userToken = await createJwtToken(newUser);
    console.log(userToken)

    const userDetail = {...newUser,token:userToken}

    const {name : userName,email : userEmail} = userDetail._doc
    const {token} = userDetail

    const sharedUserDetails = {userName,userEmail,token}

    res.status(200).send({
      success: true,
      user:sharedUserDetails
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while registering the user",
      error:error,
    });
  }
};

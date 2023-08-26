import jwt from "jsonwebtoken"
const JWT_SECRET_KEY = "niladriwillbeagooddeveloperatanyhow"
export const createJwtToken =async(user) =>{
    const token = jwt.sign({ id: user._id }, JWT_SECRET_KEY, {
        expiresIn: "14d",
      });
    // console.log(token)
    return token;
}
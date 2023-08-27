//create a basic index.js file
//import express from the node_modules folder
import express from "express";
import { connectDB } from "./database/connection.js";
import JS from "passport-jwt";
import EJ from "passport-jwt";
import passport from "passport";
import { UserDetails } from "./models/userDetails.js";
import authRouter from "./router/auth.js";
import songRouter from "./router/song.js";
const app = express();
const PORT = 5000;

app.use(express.json());

connectDB();

const JwtStrategy = JS.Strategy;
const ExtractJwt = EJ.ExtractJwt;

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "niladriwillbeagooddeveloperatanyhow";
passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    try {
      const loggedInUser = async () => {
        const loggedUser = await UserDetails.findOne({ id: jwt_payload.sub });
        return loggedUser;
      };

      const user = loggedInUser();

      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    } catch (e) {
      return done(err, false);
    }
  })
);

// app.get("/", (req, res) => {
//   console.log("Hello World!");
//   res.status(200).send("Hello world")
// });

app.use("/auth", authRouter);
app.use("/song", songRouter);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

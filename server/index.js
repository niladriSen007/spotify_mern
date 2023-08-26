//create a basic index.js file
//import express from the node_modules folder
import express from "express";
import {connectDB} from "./database/connection.js"
import JS from 'passport-jwt';
import EJ from 'passport-jwt';
import passport from "passport";
import { UserDetails } from "./models/userDetails.js";
import authRouter from "./router/auth.js"
const app = express();
const PORT = 5000

app.use(express.json())


connectDB()



const JwtStrategy = JS.Strategy;
const ExtractJwt = EJ.ExtractJwt;

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'niladrisenfullstackdeveloper';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    UserDetails.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

// app.get("/", (req, res) => {
//   console.log("Hello World!");
//   res.status(200).send("Hello world")
// });


app.use("/auth",authRouter)

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})






const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    register: (request, response) => {
        console.log("in register")
        console.log(request.body);
        const user = new User(request.body);

        user.save()
            .then((newUser)=> {
                console.log("registration successful");
                response.json({ messageSuccess: "success in registering", user: newUser})
            })
            .catch((error) => {
                console.log("registration unsuccessful!")
                console.log(error);
                response.status(400).json(error);
            })
    },

    login: (request, response) => {
        User.findOne({ email: request.body.email})
            .then((logUser) => {
                if(logUser === null){
                    response.status(400).json({message: "Invalid Login Attempt. Try Again."})
                } else {
                    //valid user , verify password
                    //bcrypt compare method, 2 arguments request body password(what user is typing) and the user password saved in db
                    bcrypt.compare(request.body.password, logUser.password)
                        .then((isPasswordValid)=>{
                            //successfully compared , but boolean tells us if they match
                            if(isPasswordValid === true){
                                console.log("password is valid");
                                // create a cookie object
                                // userToken can be anything
                            response.cookie("userToken", 
                                jwt.sign({
                                user_id: logUser._id,
                                email: logUser.email,
                                userName: logUser.userName
                                },
                                process.env.JWT_SECRET),
                                {
                                    //config settings for this cookie
                                    httpOnly: true,
                                    expires: new Date(Date.now() + 9000000)
                                    // if people don't login after this long, session expires
                                })
                            .json({
                                message: "Successful Login", 
                                loggedInUser: logUser.userName,
                                userId: logUser._id
                            })
                            // do I need the extra { ? }
                            } else {
                                response.status(400).json({message: "Invalid login Attempt. Try Again."})
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                            response.status(400).json({message: "Invalid login Attempt. Try Again."})
                        })
            }
            })
            .catch((error)=> {
                console.log(error);
                response.status(400).json({message: "Invalid Login Attempt. Try Again." })
            })
    },
    logout: (request, response) => {
        console.log("Logging out");
        response.clearCookie("userToken");
        response.json({
            message: "successfully logged out!"
        })
    },
    getOneUser:(request, response) => {
        User.findOne({_id: request.params.id}) //"id" is variable in the route. must match!!
        .then((oneUser)=>{
            console.log(oneUser);
            response.json(oneUser);
        })
        .catch((error)=> console.log(error));
    }
}
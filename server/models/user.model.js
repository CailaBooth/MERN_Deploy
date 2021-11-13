const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({

    userName: {
        type: String, 
        required: [true, "You need a name!"], 
        minLength: [2, "Must be more than 1 character"]},
    email: {
        type: String, 
        required: [true, "Must provide email"]},
    password: {
        type: String, 
        required: [true, "Password Required"],
        minLength: [8, "What are you new? Password must be at least 8 Characters"]},
    interests: {
        type: String },
    // userImage: {
    //     type: String,
    //     required: [true, "Please add a picture. Any picture"]
    // }
    // favoriteCharity: {
    //     type: Boolean,
    // }
    

}, {timestamps: true});
// don't forget confirm password and validations
// get confirmPAssword in request body
// create a virtual space to hold the value.

UserSchema.virtual("passwordConfirm")
    .get(() => this._passwordConfirm) 
    // needs underscore here^v and no where else 
    .set((value) => this._passwordConfirm = value);

// middleware between creation and validation
UserSchema.pre("validate", function(next) {
    console.log("Inside of validate. middleware")
    if(this.password !== this.passwordConfirm){
        this.invalidate("passwordConfirm", "Passwords Must Match")
        console.log("passwords didn't match")
    }
    next();
})

UserSchema.pre("save", function(next){
    console.log("In pre save")
    // encrypt before it's saved
    // we know they match because of middleware 
    bcrypt.hash(this.password, 10)
        .then((hashWord) => {
            // give our pw the value of the returned hash.
            console.log("in hash");
            this.password = hashWord;
        next();
        })
})
const User = mongoose.model("User", UserSchema);

module.exports = User;
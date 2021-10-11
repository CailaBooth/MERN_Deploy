const mongoose = require("mongoose");

const CharitySchema = new mongoose.Schema({
    charityName: {
        type: String,
        required: [true, "We Need a Name!"],
        minLength: [2, "Must be at least 2 charactesr long!"]
    },

    charityWebsite: {
        type: String,
        required: [true, "Show others the way!"]

    },
    charityDonation: { type: Number, required: [true, "Make your best guess, can be as low as you want."]},
    charityType: {
        type: String,
        required: [true, "Pick the main area the charity makes a difference in."],
        enum: [
            "LGBTQ+",
            "Animals",
            "Environment",
            "WomensIssues",
            "Poverty",
            "Veterans",
            "Arts and Culture",
            "Education",
            "Health",
            "Other"
        ]
    },
    favorite: {
        type: Boolean
    },
    //the user that created
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {timestamps: true});

const Charity = mongoose.model("Charity", CharitySchema);

module.exports = Charity;
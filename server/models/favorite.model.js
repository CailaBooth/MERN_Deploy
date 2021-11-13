const mongoose = require("mongoose")

const favoriteSchema = mongoose.Schema({
    favoriteName: {
        type: String,
        required: [true, "We Need a Name!"],
        minLength: [2, "Must be at least 2 charactesr long!"]
    },

    favoriteWebsite: {
        type: String,
        required: [true, "Show others the way!"]

    },
    favoriteDonation: { type: Number, required: [true, "Make your best guess, can be as low as you want."]},
    favoriteType: {
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

    //the user that created
    userFavorite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    favoriteCharity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Charity"
    }

}, {timestamps: true});

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = Favorite;
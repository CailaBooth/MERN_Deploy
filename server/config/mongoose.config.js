const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Newdb",  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connection to database"))
    .catch(error => console.log("something went wrong when connecting to the database", error))
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const PORT = 8000; // not sure about this.
const app = express();
// file upload
// const multer = require("multer")
// require("./models/file.model");
// const File = mongoose.model("file");
// const router = express.Router();

// const storage = multer.diskStorage({
//     destination: "./public/",
//     filename: function(request, file, cb){
//         cb(null, "Image-" + Date.now() + Path.extname(file.originalname));
//     }
// });
// const obj = (request,response) =>{
//     XMLHttpRequestUpload(request, response, () =>{
//         console.log("REQUEST --- ", request.body);
//         console.log("Request file ---", request.file);
//         const file = new File();
//         file.meta_data = request.file;
//         file.save().then(()=>{
//             response.send({message: "Upload Successful"})
//         })
//     })
// }
// router.post("/upload", obj);
// app.use(router);
// app.get("/", (request, response)=>{
//     return response.send("Hi");
// });
// mongoose.connect("mongodb://localhost/file-upload",{
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true,
// }).then(()=>{console.log("Db connected")})

// app.list(PORT,()=>{
//     console.log("\u{1F525}\u{1F680} app listen on port", process.env.MY_PORT)
// })
// file upload


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
}));

app.use(cookieParser());

require("./config/mongoose.config");
require("./routes/charity.routes")(app);
require("./routes/user.routes")(app);
app.listen(process.env.MY_PORT, ()=>{
    console.log("Listening at port ",process.env.MY_PORT);
})

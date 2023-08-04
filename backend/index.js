const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors");

const multer = require("multer")
const path = require("path")

app.use(cors());

const authRoute = require("../backend/routes/auth")
const authUser = require("../backend/routes/users")
const authPost = require("../backend/routes/posts")
const authCat = require("../backend/routes/categories")

dotenv.config()
app.use(express.json())
app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err))

const storage = multer.diskStorage({
  destination: (req, file, callb) => {
    callb(null, "images")
  },
  filename: (req, file, callb) => {
    callb(null, req.body.name)
  },
})
const upload = multer({ storage: storage })
app.post("/backend/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded")
})

app.get('/', (req, res)=>{
  res.send("Hello");
})

app.use("/backend/auth", authRoute)
app.use("/backend/users", authUser)
app.use("/backend/posts", authPost)
app.use("/backend/category", authCat)

app.listen(5000, () => {
  console.log("backend running...")
})

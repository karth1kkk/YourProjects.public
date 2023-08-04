const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    desc: {
      type: String,
      require: true,
    },
    photo1: {
      type: String,
      require: false,
    },
    photo2: {
      type: String,
      require: false,
    },
    username: {
      type: String,
      require: true,
    },
    ProfilePic:{
      type: String,
      require:false,
    },
    link:{
      type: String,
      require:false,
    },
    sourceCodeFile:{
      type:String,
      require:false,
    },
    categories: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model("Post", PostSchema)
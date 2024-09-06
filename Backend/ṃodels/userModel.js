import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  Originalurl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
});


const userModel = mongoose.model("url", userSchema);

export default userModel;
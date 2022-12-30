const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  img: {
    data: Buffer,
    contentType: String,
  },
});

var Post = mongoose.model("post", postSchema);

var Post = require("../models/post.model");

const addImg = async (img: any) => {
  try {
    const newImg = new Post({ img: img });
    const image = await newImg.save();
    return {
      status: 200,
      message: "image added succesfully",
      data: image,
    };
  } catch (error) {
    return {
      status: 400,
      message: "image adding unsuccesful",
      data: error,
    };
  }
};

module.exports = { addImg };

import express, { Request, Response } from "express";
import { appendFile } from "fs";
const addImg = require("../services/post.service");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Storage = multer.diskStorage({
  destination: "./uploads/img",
  filename: (req: any, file: any, cb: any) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({
  storage: Storage,
});
router.use("/img", express.static("upload/img"));
router.post("/", upload.single("img"), (req: Request, res: Response) => {
  res.json({
    success: 1,
    // url: `http://localhost:3200/img/`,
  });

  //   upload(req, res, (err: any) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       const img = addImg({
  //         img: {
  //           data: req.file.filename,
  //           contentType: "img/png",
  //         },
  //       });
  //       res.send({ status: img.status, message: img.message, data: img.data });
  //     }
  //   });
});
module.exports = router;

import express, { Request, Response } from "express";
import bodyParser from "body-parser";
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv/config");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/post", require("./controllers/post.controller"));

app.get("/", (req: Request, res: Response) => {
  res.send("Post api for medium clone...");
});

app.listen(process.env.PORT, () => {
  console.log(`listening to port ${process.env.PORT}...`);
});

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connectet to db...")
);

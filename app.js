const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const postRoute = require("./routes/posts");

const app = express();

app.use(bodyParser.json());

app.use("/posts", postRoute);

mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("connected to DB!!!!");
	}
);

app.get("/", (req, res) => {
	res.send("<h1>we are home</h1>");
});

app.listen(3000);

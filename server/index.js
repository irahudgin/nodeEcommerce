const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const path = require("path");

var corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri =
    "mongodb+srv://irahudgin:pTKHaLOaSfzGnHG1@cluster0.ttxkt7z.mongodb.net/EELuxDB?retryWrites=true&w=majority";

mongoose
    .connect(uri)
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log(err);
    });

db.mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
    })
    .catch((err) => {
        console.error("Connection error", err);
        process.exit();
    });

app.get("/", (req, resp) => {
    resp.send("Server is Working");
});

app.listen(5001);

// Server js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
// middleware

app.use(bodyParser.json());


// connect to MongoDb

mongoose.connect("mongodb://localhost:27017/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongoDB connection error:"));

//routes
app.use("/products", require("./routes/products"));

//starts servers

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

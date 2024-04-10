const express = require("express");
const app = express();

//Loads .env file contents into process.env by default
require("dotenv").config()

const PORT = process.env.PORT || 4000;

//activate the server.
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

//Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json());

const dbConnect = require("./config/database")
dbConnect.connect()

// Routes and mounting
const user = require("./routes/user");
app.use("/api/v1", user)

const express = require("express");
const app = express();

require("dotenv").config()

const PORT = process.env.PORT || 4000;

//activate the server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(express.json());

require("./config/database").connect();

// Routes and mounting
const user = require("./routes/user");
app.use("/api/v1", user)
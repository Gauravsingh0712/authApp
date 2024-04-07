const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log("Connected to database");
        })
        .catch((err) => {
            console.error("Error connecting to database:", err);
            process.exit(1);
        });
}


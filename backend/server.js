const express = require("express");

const app = express();

// creating an express api so that we can get

app.get('/', (req,res) => {
    res.send("API is running")
});

app.listen(5500, console.log("Server started on port 5500"));


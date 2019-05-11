"use strict";
const express = require("express");
const app = express();

app.use("./api")

app.use(express.static("./static"));

app.use("/", function(req, res){

});

app.listen(8080);


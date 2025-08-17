const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "Rien a tégra" });
});

module.exports = app;
module.exports.handler = serverless(app);

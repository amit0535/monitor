const express = require("express");
const status = require("./inc/status");
require("dotenv").config();
const app = express();
app.get("/status", async function (req, res) {});
app.post("/status", async function (req, res) {
  status.setStatus(req);
  res.json({ status: "OK" });
});
app.get("*", async function (req, res) {
  res.status(404);
  res.json({ status: "INVALID_URL", message: "Please set correct endpoint." });
});

app.listen(3001, function () {
  console.log("NodeJS API Server running at 3000");
});

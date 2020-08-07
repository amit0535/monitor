require("dotenv").config();
const express = require("express");
const status = require("./inc/status");
const app = express();
app.use(express.urlencoded());
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
  console.log("NodeJS Status Server running at 3001");
});

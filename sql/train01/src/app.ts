// const express = require("express");
import express from "express";

const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

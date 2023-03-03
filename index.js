#!/usr/bin/env node

import ikd from "./rIKD.js";
import express from "express";
const app = express();
const PORT = process.env.PORT || 6010;

app.get("/", async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  const data = await ikd.Get();
  res.end(JSON.stringify(data, "", 2));
});

app.listen(PORT, console.log(PORT));

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "PERSIKCORE",
    status: "online",
    version: "1.0.0",
    message: "Welcome to PersikGram Server!"
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    online: true,
    server: "PERSIKCORE"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("PERSIKCORE started on port " + PORT);
});

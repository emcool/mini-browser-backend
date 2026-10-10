const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Allow cross-origin requests for the test API.
app.use(cors());

// Basic health check.
app.get("/", (req, res) => {
  res.status(200).send("Mini-browser backend is running!");
});

// API connection test.
app.get("/api/test", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Your HTML frontend connected successfully!"
  });
});

// Start the server.
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});

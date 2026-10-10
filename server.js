const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for API requests.
app.use(cors());

// Main health check.
app.get("/", (req, res) => {
  res.status(200).send("Mini-browser backend is running!");
});

// Backend connection test.
app.get("/api/test", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Your HTML frontend connected successfully!"
  });
});

// CORS diagnostic endpoint.
app.get("/api/cors-test", (req, res) => {
  res.status(200).json({
    status: "ok",
    origin: req.headers.origin || "no origin header",
    cors: "enabled"
  });
});

// Handle unknown routes.
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Endpoint not found"
  });
});

// Start the server.
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});

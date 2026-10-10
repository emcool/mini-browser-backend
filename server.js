const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Backend home
app.get("/", (req, res) => {
  res.send("Mini-browser backend is running!");
});

// API connection test
app.get("/api/test", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend connection successful!"
  });
});

// CORS diagnostic
app.get("/api/cors-test", (req, res) => {
  res.json({
    status: "ok",
    origin: req.headers.origin || "no origin header",
    cors: "enabled"
  });
});

// Controlled demo webpage
app.get("/demo", (req, res) => {
  res.type("html").send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Mini Browser Demo</title>
  <style>
    body {
      margin: 0;
      padding: 30px 20px;
      font-family: Arial, sans-serif;
      background: #f0f7ff;
      color: #183153;
      text-align: center;
    }
    .card {
      max-width: 500px;
      margin: 20px auto;
      padding: 24px;
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 18px #0001;
    }
    h1 { color: #1769aa; }
    .success {
      padding: 12px;
      background: #e0f7e9;
      border-radius: 8px;
      color: #146c3a;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Mini Browser Demo</h1>
    <p class="success">The demo page loaded successfully!</p>
    <p>This is a simple test page hosted by your own backend.</p>
    <p>If you can read this inside the mini-browser frame,
       the page display works for this test.</p>
  </div>
</body>
</html>`);
});

// Unknown routes
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Endpoint not found"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server listening on port " + PORT);
});

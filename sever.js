const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.type("html").send(`
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width">
        <title>Mini Browser Backend</title>
      </head>
      <body style="font:16px sans-serif;padding:24px">
        <h1>Mini-browser backend is running!</h1>
        <p>Your HTML frontend can reach this service.</p>
      </body>
    </html>
  `);
});

app.get("/api/test", (req, res) => {
  res.json({
    status: "ok",
    message: "Your HTML frontend connected successfully!"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});

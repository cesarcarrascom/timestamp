const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  const date = new Date();
  res.json({ unix: date.valueOf(), utc: date.toUTCString() });
});

app.get("/api/:date", (req, res) => {
  let timestamp = req.params.date;
  if (timestamp.match(/\d{5,}/)) {
    timestamp = +timestamp;
  }
  const date = new Date(timestamp);

  if (date.toUTCString() == "Invalid Date") {
    res.json({ error: date.toUTCString() });
  }

  res.json({ unix: date.valueOf(), utc: date.toUTCString() });
});

const PORT = 9000;

app.listen(PORT, () => {
  console.log("App is listening on port: " + PORT);
});

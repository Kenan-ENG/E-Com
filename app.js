const express = require("express");

const app = express();

// start the server

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

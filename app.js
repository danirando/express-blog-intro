const express = require("express");
const app = express();
const port = 3000;

const { posts } = require("./main.js");

app.use(express.static(`public`));

app.get("/", (req, res) => {
  res.json(`Server del mio blog`);
});

app.get("/bacheca", (req, res) => {
  res.json(posts);
});

app.listen(port, () => {
  console.log("Il server è in ascolto su http://localhost:" + port);
});

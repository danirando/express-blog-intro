const express = require("express");
const app = express();
const port = 3000;

let posts = [
  {
    titolo: "post 1",
    contenuto: "lorem ipsum",
    immagine: "/img",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "post 2",
    contenuto: "lorem ipsum",
    immagine: "/img",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "post 3",
    contenuto: "lorem ipsum",
    immagine: "/img",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "post 4",
    contenuto: "lorem ipsum",
    immagine: "/img",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "post 5",
    contenuto: "lorem ipsum",
    immagine: "/img",
    tags: ["tag1", "tag2", "tag3"],
  },
];

app.get("/", (req, res) => {
  res.json(`Server del mio blog`);
});

app.get("/bacheca", (req, res) => {
  res.json(posts);
});

app.listen(port, () => {
  console.log("Il server è in ascolto su http://localhost:" + port);
});

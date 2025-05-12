const express = require("express");
const app = express();
const port = 3000;

let posts = [
  {
    titolo: "post 1",
    contenuto: "lorem ipsum",
    immagine: "/img/ciambellone.jpeg",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "post 2",
    contenuto: "lorem ipsum",
    immagine: "/img/cracker_barbabietola.jpeg",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "post 3",
    contenuto: "lorem ipsum",
    immagine: "/img/pane_fritto_dolce.jpeg",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "post 4",
    contenuto: "lorem ipsum",
    immagine: "/img/pasta_barbabietola.jpeg",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "post 5",
    contenuto: "lorem ipsum",
    immagine: "/img/torta_paesana.jpeg",
    tags: ["tag1", "tag2", "tag3"],
  },
];

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

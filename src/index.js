const express = require("express");
const cors = require("cors");

const app = express(); // Express inicializavimas
app.use(express.json()); // Kai daromas POST, pareitu JSON formatu
app.use(cors()); // Apsauga

const { port } = require("./config"); // ./ tam paciam folderyje, ../ atgal vienu folderiu

const users = require("./routes/users");

// localhost:3000/products
app.use("/users/", users);

localhost: 3000 /
  app.get("/", (req, res) => {
    res.send({ message: "Server is running" });
  });

app.all("*", (req, res) => {
  res.status(404).send({ error: "Page not found" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

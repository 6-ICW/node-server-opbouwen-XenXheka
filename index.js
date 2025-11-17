const express = require("express");
const app = express();
const routes_lln = require("./routes/leerlingen")

app.get("/", (req,res) => {
  res.send("Welkom op mijn <b>pagina</b>");
})
app.use(express.json())
app.use("/items",routes_lln)
app.listen(4000)
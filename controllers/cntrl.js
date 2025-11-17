const data = require("../lijst")
const dataTonen = (req,res) =>{
    const namen = []
    data.forEach((item) => {
        namen.push(item.naam)
    })
    res.send(namen)
}
const Toonitem = (req, res) => {
  const idItem = req.params.id;
  res.json(data.filter((item) => item.id == idItem));
};
module.exports = {
    dataTonen,
    Toonitem
}
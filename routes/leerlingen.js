const express = require("express");
const routes = express.Router();
const cntrlLeerling = require("../controllers/cntrl")

routes.get("/",cntrlLeerling.dataTonen)
routes.get("/ID",cntrlLeerling.Toonitem)
module.exports= routes
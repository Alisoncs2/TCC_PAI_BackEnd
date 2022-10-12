const express = require("express");
const cors = require("cors");
const app = express();
const address = require("./address/router/address.router")
app.use(express.json());
app.use(cors());


app.use(address);
app.use(cors())


app.listen(4000, () => console.log("Rodando na porta 4000"));
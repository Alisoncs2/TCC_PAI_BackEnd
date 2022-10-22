const express = require("express");
const cors = require("cors");
const app = express();
const address = require("./modules/address/router/address.router")
const car = require("./modules/car/router/car.router")
app.use(express.json());
app.use(cors());


app.use(address);
app.use(car);
app.use(cors())


app.listen(4000, () => console.log("Rodando na porta 4000"));
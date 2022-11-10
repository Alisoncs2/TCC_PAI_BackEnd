const db = require("../../../../config");
const express = require("express");
const requireJsonContent = require("../../../middlewares/requireJsonContent.middleware");
const car = express.Router()
const carSchema = require("../model/car.model");
const validate = require("../../../middlewares/validateSchema.middleware");


const carros = db.collection("carros")

car.get("/car/:id?", async (req, res) => {

    const id  =  req.params.id;

    if(!id){
        const snapshot = await carros.get();
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.send(list);
    }else{
        const item =  await carros.doc(id).get();
        const doc = item.data();
        res.send(doc);
    }
    
});

car.post("/car",requireJsonContent, validate(carSchema), async(req,res) =>{
    
    const data = req.body;
    await carros.add(data)
    res.json(data)
}) 

car.put("/car/:id", requireJsonContent, validate(carSchema),async(req,res) =>{

    const id = req.params.id;
    const data = req.body;
    await carros.doc(id).update(data);
    res.json(data)
})

car.delete("/car/:id", async(req,res) =>{

    const id = req.params.id;
    await enderecos.doc(id).delete();
    res.json(`Id: ${id} deletado`)
})


module.exports = car
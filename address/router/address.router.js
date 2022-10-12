const db = require("../../config");
const express = require("express");
const requireJsonContent = require("../../middlewares/requireJsonContent.middleware");
const address = express.Router()
const addressSchema = require("../model/address.model");
const validate = require("../../middlewares/validateSchema.middleware");


const enderecos = db.collection("endereços")

address.get("/address/:id?", async (req, res) => {

    const id  =  req.params.id;

    if(!id){
        const snapshot = await enderecos.get();
        const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.send(list);
    }else{
        const item =  await enderecos.doc(id).get();
        const doc = item.data();
        res.send(doc);
    }
    
});

address.post("/address",requireJsonContent, validate(addressSchema), async(req,res) =>{
    
    const data = req.body;
    await enderecos.add(data)
    res.json(data)
}) 

address.put("/address/:id", requireJsonContent, validate(addressSchema),async(req,res) =>{

    const id = req.params.id;
    const data = req.body;
    await enderecos.doc(id).update(data);
    res.json(data)
})

address.delete("/address/:id", async(req,res) =>{

    const id = req.params.id;
    await enderecos.doc(id).delete(data);
    res.json(`Id: ${id} deletado`)
})


module.exports = address
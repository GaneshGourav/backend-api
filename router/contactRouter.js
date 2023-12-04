const express = require("express");
const {contactModel} = require("../model/contactmanagement")

const contactRouter = express.Router();

contactRouter.post("/",async(req,res)=>{
    const payload = req.body;
    try {
        const contact = new contactModel(payload);
        await contact.save();
        res.status(200).json({message:"Data Added successfully",contact})
    } catch (error) {
        res.status(500).json({message:"Internal server Error"})
    }
});

module.exports={contactRouter}

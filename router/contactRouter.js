const express = require("express");
const { contactModel } = require("../model/contactmanagement");

const contactRouter = express.Router();

contactRouter.post("/", async (req, res) => {
  const payload = req.body;
  try {
    const contact = new contactModel(payload);
    await contact.save();
    res.status(200).json({ message: "Data Added successfully", contact });
  } catch (error) {
    res.status(500).json({ message: "Internal server Error" });
  }
});
contactRouter.get("/get", async (req, res) => {
  try {
    const data = await contactModel.find({});
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ error: "internal server Error" });
  }
});
contactRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await contactModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).json({ message: "contact has been updated successfully" });
  } catch (error) {
    res.status(400).json({ error: "Internal server Error" });
  }
});

contactRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await contactModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Contact has been deleted" });
  } catch (error) {
    res.status(500).json({ error: "Internal server Error" });
  }
});
module.exports = { contactRouter };

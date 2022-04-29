const express = require("express");
const router = express.Router();

const ShirtController = require("../controllers/shirt.controller");

// get all shirtboy
router.get("/", ShirtController.getShirtList);

// get shirtboy by ID
router.get("/:id", ShirtController.getShirtByID);

// create new shirtboy
router.post("/", ShirtController.createNewShirt);

// Update shirt
router.put("/:id", ShirtController.updateShirt);

// delete shirt
router.delete("/:id", ShirtController.deleteShirt);

module.exports = router;

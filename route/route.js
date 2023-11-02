const express = require("express");
const mySqlController = require("../controller/mySqlController");


const router = express.Router();

// create user
router.post("/create", mySqlController.Post);

// get user
router.get("/getOne/:id", mySqlController.GetOne);
router.get("/getAll", mySqlController.GetAll);

// update user 
router.put("/update/:id", mySqlController.Put);

// delete user
router.delete("/delete/:id", mySqlController.Delete);

module.exports = router;

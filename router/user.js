const express = require("express");
const router = express.Router();
const ctrl = require("../controller/user");

router.post("/create/user/details",ctrl.createUserDetails);

router.get("/all/get/user/details",ctrl.getAllUserDetails);

router.post("/login/user", ctrl.loginUser);

router.put("/update/user/details",ctrl.updateUserDetails);

router.delete("/delete/single/user/details",ctrl.deleteSingleUserDetails);

router.delete("/delete/all/user/details",ctrl.deleteAllUserDetails);

module.exports = router;









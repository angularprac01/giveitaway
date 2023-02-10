const express = require("express");
const {getNgoList, updateNgoList} = require("../modules/ngo/ngo.controller.js");

const router = express.Router();

router.get("/getNgoList", getNgoList);
router.put("/updateNgoList", updateNgoList);

module.exports = router;

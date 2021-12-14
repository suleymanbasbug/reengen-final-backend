const express = require("express");
const { create, index, edit, destroy } = require("../controllers/Factory");
const router = express.Router();
const validate = require("../middlewares/validate");
const schemas = require("../validations/Projects");
const authToken = require("../middlewares/auth");

router.route("/").post(create);
router.route("/").get(index);
router.route("/:id").put(edit);
router.route("/:id").delete(destroy);
module.exports = router;

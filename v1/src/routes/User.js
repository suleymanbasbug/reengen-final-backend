const express = require("express");
const { create, index, login, getAuthUser } = require("../controllers/User");
const router = express.Router();
const validate = require("../middlewares/validate");
const schemas = require("../validations/User");

router.get("/", index);
router.route("/").post(validate(schemas.createValidation), create);
router.route("/login").post(validate(schemas.loginValidation), login);
router.route("/me").get(getAuthUser);
module.exports = router;

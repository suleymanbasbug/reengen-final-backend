const express = require("express");
const {
  create,
  findByFactoryId,
  edit,
  destroy,
} = require("../controllers/Unit");
const router = express.Router();

router.route("/").post(create);
router.route("/factory/:id").get(findByFactoryId);
router.route("/:id").put(edit);
router.route("/:id").delete(destroy);
module.exports = router;

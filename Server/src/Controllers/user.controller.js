const { Router } = require("express");
const router = Router();

const User = require("../Models/user.model");

router.get("", async (req, res) => {
  try {
    const users = await User.find({}).lean().exec();
    return res.status(200).send({ data: users });
  } catch (error) {
    return res.status(500).send({ status: "Failed", message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const users = await User.findByIdAndRemove(req.params.id).lean().exec();
    return res.status(200).send({ data: users });
  } catch (error) {
    return res.status(500).send({ status: "Failed", message: error.message });
  }
});

module.exports = router;

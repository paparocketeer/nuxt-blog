const express = require("express");
const router = express.Router();
const Wiki = require("../model/wiki");

router.get("/", async (req, res) => {
    try {
      let wikis = await Wiki.find()
      .limit(4)
      .select('_id h1 title intro url created_date level views youtube')
      res.status(200).json(music);
    } catch (err) {
      res.status(500).json(err);
    }
  })

module.exports = router;

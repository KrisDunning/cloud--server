'use strict';

const express = require ('express');
const {FoodModel} = require('../models');
const router = express.Router();


router.post('/food', async (req, res, send) => {
  const newFood = await FoodModel.create(req.body);
  res.status(200).send(newFood);
});

module.exports = router;

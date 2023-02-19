const Plants = require("../models/plantModel");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.getPlants = catchAsyncErrors(async(req, res, next) => {
  const data = await Plants.find()
  res.send(data);
})

exports.getPlantDetails = catchAsyncErrors(async(req, res, next) => {
  const data = await Plants.findOne({name: req.params.id})
  res.send(data);
})
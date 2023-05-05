const Winset = require("../models/winsetModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
exports.createWinset = catchAsyncErrors(async (req, res, next) => {

    
      const winset = await Winset.create(req.body);
    
      res.status(201).json({
        success: true,
        winset
      });
  });


  exports.getWinset = catchAsyncErrors(async (req, res, next) => {

    
    const winset = await Winset.findById("62e2356465becb7436d8c977");
  
    res.status(200).json({
      success: true,
      winset
    });
});


exports.UpdateWinset = catchAsyncErrors(async (req, res, next) => {

    
    const winset = await Winset.findByIdAndUpdate("62e2356465becb7436d8c977", req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
  
    res.status(200).json({
      success: true,
      winset
    });
});

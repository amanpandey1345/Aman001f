const Showtime = require("../models/showtimeModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
exports.createShowtime = catchAsyncErrors(async (req, res, next) => {

    
      const showtime = await Showtime.create(req.body);
    
      res.status(201).json({
        success: true,
        showtime
      });
  });


  exports.getShowtime = catchAsyncErrors(async (req, res, next) => {

    
    const showtime = await Showtime.findById("62e248c35a0b4431255a0347");
  
    res.status(200).json({
      success: true,
      showtime
    });
});


exports.UpdateShowtime = catchAsyncErrors(async (req, res, next) => {

    
    const showtime = await Showtime.findByIdAndUpdate("62e248c35a0b4431255a0347", req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
  
    res.status(200).json({
      success: true,
      showtime
    });
});

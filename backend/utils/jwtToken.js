// Create token and saving in cookie
export const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  const options = {
    expire: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};



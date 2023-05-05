// Create token and saving in cookie
const sendToken = (user, statusCode, res)=>{
    const token = user.getJWTToken();

    const options = {
        expire: new Date(
            Date.now() + 15 * 24 * 60 * 60 * 1000
        ),
        httpOnly: false,
        secure: true,
        sameSite: "none",




    }
    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token
    })
}

module.exports = sendToken;
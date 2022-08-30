// [Será validado que não é possível fazer login sem todos os campos preenchidos]
const validationLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    const err = new Error('Some required fields are missing');
    err.status = 400;
    throw err;
    // res.status(400).json({
    //   message: 'Some required fields are missing',
    // });
  }
  next();
};

module.exports = validationLogin;
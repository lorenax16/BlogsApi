const validated = {
  validationLogin: (req, res, next) => {
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
  },

  verificaUser: (req, res, next) => {
    const { displayName, email, password } = req.body;
    const regex = /\S+@\S+\.\S+/;
    const valida = regex.test(email);
  
    if (displayName.length < 8) {
      return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    if (!valida) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    }
    if (password.length < 6) {
      return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
    }
    next();
  },

  validateCategory: (req, res, next) => {
    const { name } = req.body;
  
    if (!name) {
      const err = new Error('"name" is required');
      err.status = 400;
      throw err;
    }
    next();
  },
};

module.exports = validated;
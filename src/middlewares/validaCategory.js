const validateCategory = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    const err = new Error('"name" is required');
    err.status = 400;
    throw err;
  }
  next();
};

module.exports = validateCategory;
const jwt = require('jsonwebtoken');

require('dotenv').config();

const { JWT_SECRET } = process.env;
const JWT_OPTIONS = { algorithm: 'HS256', expiresIn: '1d' };

const createToken = (payload) => {
    const token = jwt.sign({ data: payload.email }, JWT_SECRET, JWT_OPTIONS);
    return token;
};

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    if (!token) {
      const err = new Error('Token not found');
      err.status = 401;
      throw err;
    }
  }
};

module.exports = { createToken, verifyToken };
const jwt = require('jsonwebtoken');

require('dotenv').config();

const { JWT_SECRET } = process.env;
const JWT_OPTIONS = { algorithm: 'HS256', expiresIn: '1d' };

const createToken = (payload) => {
    const token = jwt.sign({ data: payload.email }, JWT_SECRET, JWT_OPTIONS);
    return token;
};

module.exports = createToken;
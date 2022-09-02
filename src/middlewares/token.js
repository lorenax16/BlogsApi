const jwt = require('jsonwebtoken');

require('dotenv').config();

const { JWT_SECRET } = process.env;
const JWT_OPTIONS = { algorithm: 'HS256', expiresIn: '1d' };

const createToken = (data) => {
    const token = jwt.sign({ data }, JWT_SECRET, JWT_OPTIONS);
    console.log(token, 'payload');
    return token;
};

module.exports = createToken;
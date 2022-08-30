require('dotenv').config();
const app = require('./api');
const login = require('./controllers/loginController');
const validationLogin = require('./middlewares/validateLogin');
require('express-async-errors');

app.post('/login', validationLogin, login);
// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});
// middleware de erro ele pega todas as rotas.
app.use((err, req, res, _next) => {
  const { status, message } = err;
  console.error(err);
  res.status(status || 500).json({ message });
});

app.listen(port, () => console.log('ouvindo porta', port));

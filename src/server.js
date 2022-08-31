require('dotenv').config();
const app = require('./api');
const userController = require('./controllers/userController');
const categoriesController = require('./controllers/categoryController');
const validationLogin = require('./middlewares/validateLogin');
const verificaUser = require('./middlewares/validationUser');
const validateCategory = require('./middlewares/validaCategory');
const auth = require('./middlewares/auth');
require('express-async-errors');

app.post('/login', validationLogin, userController.login);
app.post('/user', verificaUser, userController.create);
app.get('/user', auth, userController.getAll);
app.get('/user/:id', auth, userController.getById);
app.post('/categories', validateCategory, auth, categoriesController.create);
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

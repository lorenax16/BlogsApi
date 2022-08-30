const express = require('express');
// const routes = require('./routes/routeLogin');

// ...

const app = express();

app.use(express.json());
// app.use('/login', routes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

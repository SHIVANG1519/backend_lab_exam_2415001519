const express = require('express');
const session = require('express-session');

const routes = require('./src/routes');
const config = require('./src/config/config');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use('/', routes);

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});

const express = require('express');
require('dotenv').config();
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(routes);

app.listen(PORT, () => console.log(`app listen on port ${PORT}`));

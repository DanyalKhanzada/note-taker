const fs = require('fs');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
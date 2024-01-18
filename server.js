// express web server
const express = require('express');
const app = express();

//listing on a port
const port = 3000;

//calling routes
app.use('/', require('./routes'));

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});
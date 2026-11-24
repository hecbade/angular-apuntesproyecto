const express = require('express');
const cors = require("cors");
const app = express();

const morgan = require('morgan');

const { mongoose } = require('./database.js');

// SETTINGS

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port') , () => {
  console.log('Server is running on port ' + app.get('port'));
});



// MIDDLEWARES
app.use(cors({ origin: "http://localhost:4200"}));

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/empleados', require('./routes/empleados.routes.js'));





// ROUTES




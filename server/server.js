const path = require('path');
const express = require('express');
/* handle process.env files */
const dotenv = require('dotenv');
const cors = require('cors');
/* for uploading files */
const multer = require('multer');


/* IMPORT ROUTE PATHS */
const authRouter = require('./routes/auth.js');
const recipesRouter = require('./routes/recipes.js');


/* IMPORT MIDDLEWARE/CONTROLLER PATHS */
//const authMiddleware =  require('./middleware/auth.js');
const authController = require('./controllers/authController.js');



/* CONFIGURATIONS */
const app = express();
const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for bundle.js
 */
app.get('/', (req, res) => {
  console.log('serving main website at ' + path.resolve(__dirname, '../dist/index.html'));
  res.status(200).sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.get('/bundle.js', (req, res, next) => {
  console.log('serving bundle at ' + path.resolve(__dirname, '../dist/bundle.js'));
  res.status(200).sendFile(path.resolve(__dirname, '../dist/bundle.js'));
});

/* ROUTES */
//handle route to direct authenticated users to recipe page
app.use('/auth', authRouter);
app.use('/api', recipesRouter);


// catch-all route handler for any requests to an unknown route


app.use((req, res) => res.status(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


/* START SERVER */
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});


module.exports = app;


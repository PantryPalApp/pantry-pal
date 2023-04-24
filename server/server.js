const path = require('path');
const express = require('express');
/* handle process.env files */
const dotenv = require('dotenv');
const cors = require('cors');
/* for uploading files */
const multer = require('multer');


/* IMPORT ROUTE PATHS */
const authRouter = require('./routes/auth.js');
const userRouter = require('./routes/users.js');


/* IMPORT MIDDLEWARE/CONTROLLER PATHS */
//const authMiddleware =  require('./middleware/auth.js');
const authController = require('./controllers/authController.js');



/* CONFIGURATIONS */
const app = express();
const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use(express.static(path.join(__dirname, '../client')));

/* ROUTES */
//handle route to direct authenticated users to recipe page
app.use('/auth', authRouter);
app.use('/api/:id', recipesRouter);


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

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


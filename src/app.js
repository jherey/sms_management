import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import expressValidator from 'express-validator';

// Set up the express app
const app = express();
app.use(cors());

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Validator to check requests
app.use(expressValidator());

// Setup a default catch-all route
app.use('*', (req, res, next) => {
  res.status(404).json({
    message: 'Invalid route!',
  });
  next();
});

export default app;

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from '../app';

dotenv.config();

// Get the port to listen on
const port = process.env.PORT || 4500;

const connectionUrl = process.env.NODE_ENV === 'test'
  ? process.env.DB_URL_TEST : process.env.DB_URL;

// connect to mongodb database
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}, () => {
  console.log('Connected to database successfully');
});

app.listen(port, () => {
  console.log(`API is listening on ${port}`);
});

process.on('SIGINT', () => {
  console.warn('Shutting down server...');
  mongoose.connection.close(); // properly close db connection
  console.log('Server successfully shutdown');
  process.exit(0);
});

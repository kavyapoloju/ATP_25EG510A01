// create express app
import exp from 'express';
import { connect } from 'mongoose';
import { userApp } from './APIs/UserAPI.js';
import cookieParser from 'cookie-parser';

const app = exp();

function getErrorCode(err) {
  if (!err || typeof err !== 'object') return 'UNKNOWN_ERROR';
  return err.code || err.statusCode || err.status || err.getErrorCode;
}

// Parse JSON body and forward requests to user router
app.use(exp.json());
app.use(cookieParser());
app.use('/user-api', userApp);

app.listen(4000, () => console.log('server on port 4000...'));

async function connectDB() {
  try {
    await connect('mongodb://localhost:27017');
    console.log('database connection success');
  } catch (err) {
    console.log('DB connection error code:', getErrorCode(err));
    console.log('err in DB Connection :', err.message || err);
  }
}

connectDB();

//error handling in middle ware
app.use((err, req, res, next) => {
  const code = getErrorCode(err);
  console.log('Error name:', err?.name);
  console.log('Error code:', code);

  res
    .status(typeof err?.statusCode === 'number' ? err.statusCode : 500)
    .json({ message: 'error occurred', code, error: err?.message || 'Internal Server Error' });
});

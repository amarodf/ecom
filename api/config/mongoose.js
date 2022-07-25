const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO);
}

mongoose.connection.on('error', err => {
    logError(err);
  });

mongoose.connection.on('disconnected', () => {
    console.log('db disconnected');
  });

mongoose.connection.on('connected', () => {
    console.log('db connected');
  });

module.exports = main;
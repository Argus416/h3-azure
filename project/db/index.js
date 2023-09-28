require('dotenv').config();
const mongoose = require('mongoose');

// Get the MongoDB URI and database name from the environment variables
const uri = process.env.COSMOSDB_URI;

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', (error) => {
	console.error('MongoDB connection error:', error);
});

db.once('open', () => {
	console.log('Connected to MongoDB');
});

module.exports = db;

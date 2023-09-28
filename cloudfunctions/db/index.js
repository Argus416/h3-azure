const mongoose = require('mongoose');

const uri =
	'mongodb://h3mongodb:X11orWtQSFYgjZ9YIMHjN56y3e2VThbUJkysi4ceZNGWjlauSiFsxr2wNXz4JBX91w7eEwDCFcd0ACDb5LFzww==@h3mongodb.mongo.cosmos.azure.com:10255/h3mongodb?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@h3mongodb@';

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', (error) => {
	console.error('MongoDB connection error:', error);
});

db.once('open', () => {
	console.log('Connected to MongoDB');
});

module.exports = db;

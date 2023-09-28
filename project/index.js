require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const port = process.env.PORT || 8080;
const db = require('./db');
app.use(
	cors({
		origin: '*',
	})
);

app.use(express.json());

app.use('/', routes);

app.listen(port, () => {
	console.log(`App is running on port ${port}`);
});

app.on('error', (error) => {
	console.error('App error:', error);
	db.close();
});

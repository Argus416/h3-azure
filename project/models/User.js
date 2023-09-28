const mongoose = require('mongoose');
const db = require('../db');
const { Schema } = mongoose;

const User = db.model(
	'User',
	Schema(
		{
			name: String,
			age: Number,
		},
		{
			timestamps: true,
		}
	)
);

module.exports = User;

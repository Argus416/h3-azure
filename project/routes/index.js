const express = require('express');

const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
	res.send('Hello World!');
});

router.get('/users', async (req, res) => {
	try {
		const users = await User.find({});
		res.json({ users });
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.post('/new', async (req, res) => {
	try {
		const user = User({
			name: req.body.name,
			age: req.body.age,
		});
		await user.save();
		res.json({ user });
	} catch (err) {
		res.status(500).send(err.message);
	}
});

router.delete('/delete/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByIdAndDelete(id);

		res.send(`User with id ${user._id} deleted!`);
	} catch (err) {
		res.status(500).send(err.message);
	}
});
module.exports = router;

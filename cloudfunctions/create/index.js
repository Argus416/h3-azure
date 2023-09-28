const User = require('../models/User');

module.exports = async function (context, req) {
	context.log('JavaScript HTTP trigger function processed a request.');

	const body = {
		name: req.body.name,
		age: req.body.age,
	};

	if (!body.name || !body.age) {
		context.res = {
			status: 400,
			body: 'Please pass name and age in the request body',
		};
		return;
	}

	const users = await User.create(body);
	await users.save();

	const responseMessage = users;

	context.res = {
		status: 200 /* Defaults to 200 */,
		body: responseMessage,
	};
};

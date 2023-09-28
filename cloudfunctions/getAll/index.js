const User = require('../models/User');

module.exports = async function (context, req) {
	context.log('JavaScript HTTP trigger function processed a request.');

	const users = await User.find();
	const responseMessage = users;

	context.res = {
		status: 200 /* Defaults to 200 */,
		body: responseMessage,
	};
};

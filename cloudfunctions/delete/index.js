const User = require('../models/User');

module.exports = async function (context, req) {
	context.log('JavaScript HTTP trigger function processed a request.');
	const { id } = req.params;

	const user = await User.findByIdAndDelete(id);

	if (!user) {
		context.res = {
			status: 404,
			body: 'User not found',
		};
		return;
	}

	const responseMessage = user;

	context.res = {
		status: 200 /* Defaults to 200 */,
		body: responseMessage,
	};
};

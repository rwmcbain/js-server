var express = require('express');
var ctrl = express.Router();

var user = [
	{
		email: 'russell.mcbain@gmail.com',
		password: 'pa55wordz',
	},
	{
		email: 'michaelbrennan87@gmail.com',
		password: 'p4ssw0rdz',
	},
	{
		email: 'roseann.mcbain@gmail.com',
		password: 'p4sswirdz'
	}
];

function findUserById(id) {
	var offsetIndex = id - 1;
	return user[offsetIndex];
};

/* GET users listing. */
ctrl.get('/', function(req, res, next) {
	res.json(user);
});

ctrl.get('/:id', function(req, res, next){
	// console.log(req.params);
	var id = parseInt(req.params.id);
	if (typeof id === 'number'){
		res.json(findUserById(id));
	}
	// fall back if the IF fails
	res.json({
		message: 'user not found'
	}); 
});

module.exports = ctrl;

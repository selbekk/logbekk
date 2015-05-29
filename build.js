'use strict';

var Logger = function Logger(opts) {
	var defaults = {
		timestamp: 'YYYY-MM-DD hh:mm:ss',
		out: process.stdout
	};

	this.out = process.stdout;
	this.encoding = 'UTF-8';
};

var template = function template(str, args) {
	if (args) {
		args.forEach(function (arg) {
			return str = str.replace('{}', arg);
		});
	}
	return str + '\n';
};

Logger.prototype.info = function (str) {
	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	}

	this.out.write('[INFO] ' + template(str, args), this.encoding);
};

module.exports = Logger;

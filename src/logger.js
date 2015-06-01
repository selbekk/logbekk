var moment = require('moment');

var LogLevel = require('./log-level');
var Settings = require('./settings');

/* Helper functions */
var template = function(str, args) {
	if(args) {
		args.forEach( arg => str = str.replace('{}', arg) );
	}
	return str + '\n';
};

var write = function(logLevel, str) {
	if(!logLevel.isValid(Settings.logLevel)) {
		console.log('ignored ' + logLevel.name);
		return;
	}

	var formatted = moment().format() + ' [' + logLevel.name + ']: ' + str;
	process.stdout.write(formatted, 'UTF-8');
}

/* Constructor */

var Logger = function() {};

/* Public */
Logger.prototype.debug = function(str, ...args) {
	write(LogLevel.DEBUG, template(str, args));
};

Logger.prototype.info = function(str, ...args) {
	write(LogLevel.INFO, template(str, args));
};

Logger.prototype.warn = function(str, ...args) {
	write(LogLevel.WARN, template(str, args));
};

Logger.prototype.error = function(str, ...args) {
	write(LogLevel.ERROR, template(str, args));
};

module.exports = Logger;

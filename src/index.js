var fs = require('fs'),
	moment = require('moment');

var LogLevel = require('./log-level');
var settings = require('./settings');

/* Helper functions */
var template = function(str, args) {
	if(args) {
		args.forEach( arg => str = str.replace('{}', arg) );
	}
	return str + '\n';
};

var write = function(logLevel, str, args) {
	if(!logLevel.isValid(settings.level)) {
		return;
	}

	var formatted = moment().format(settings.timestamp) + ' [' + logLevel.name + ']: ' + template(str, args);
	settings.dest ? fs.appendFile(settings.dest, formatted) : process.stdout.write(formatted, 'UTF-8');
}

/* Constructor */

var Logger = function() {};

/* Public */
Logger.prototype.debug = function(str, ...args) {
	write(LogLevel.DEBUG, str, args);
};

Logger.prototype.info = function(str, ...args) {
	write(LogLevel.INFO, str, args);
};

Logger.prototype.warn = function(str, ...args) {
	write(LogLevel.WARN, str, args);
};

Logger.prototype.error = function(str, ...args) {
	write(LogLevel.ERROR, str, args);
};

module.exports = Logger;

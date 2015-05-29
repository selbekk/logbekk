
var Logger = function(opts) {
	var defaults = {
		timestamp: 'YYYY-MM-DD hh:mm:ss',
		out: process.std.out
	};

	this.out = process.std.out;
};

var write = function(str) {
	this.out.write(str);
};

var template = function(str, args) {
	if(args) {
		args.forEach( arg => str.replace('{}', arg) );
	}
	return str;
};

Logger.prototype.info = function(str, ...args) {
	str = template(str, args);
	this.out.write('[INFO]', str);
};

module.exports = Logger;

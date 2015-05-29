var Logger = function(opts) {
	var defaults = {
		timestamp: 'YYYY-MM-DD hh:mm:ss',
		out: process.stdout
	};

	this.out = process.stdout;
	this.encoding = 'UTF-8';
};

var template = function(str, args) {
	if(args) {
		args.forEach( arg => str = str.replace('{}', arg) );
	}
	return str + '\n';
};

Logger.prototype.info = function(str, ...args) {
	this.out.write('[INFO] ' + template(str, args), this.encoding);
};

module.exports = Logger;

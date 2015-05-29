var Logger = require('./build');
var log = new Logger();

var name = 'Kris';
log.info('hello {}', name, 'second arg', 'third arg');
